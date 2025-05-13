import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

// Método adicional antes de la exportación
function somePreProcessing() {
  // Lógica que quieras ejecutar antes de NextAuth
  console.log('Preparando autenticación...');

  // Validación del objeto authOptions
  if (!process.env.NEXTAUTH_SECRET) {
    throw new Error('La variable de entorno NEXTAUTH_SECRET es requerida.');
  }

  // Aquí podrías agregar validaciones o transformaciones adicionales
  console.log('Datos validados correctamente para NextAuth');
}

somePreProcessing(); // Llamada al método

// ⚠️ No exportes authOptions
const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Por favor ingresa email y contraseña');
        }

        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );

          if (userCredential.user) {
            return {
              id: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName || userCredential.user.email.split('@')[0],
            };
          }
          return null;
        } catch (error) {
          console.error('Error de autenticación:', error);
          if (error.code === 'auth/user-not-found') {
            throw new Error('Usuario no encontrado');
          } else if (error.code === 'auth/wrong-password') {
            throw new Error('Contraseña incorrecta');
          } else {
            throw new Error('Error al iniciar sesión');
          }
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

// NextAuth handler y exportación
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
