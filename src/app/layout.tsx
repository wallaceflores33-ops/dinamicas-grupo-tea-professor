import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '30 Dinâmicas Prontas para Incluir o Aluno com TEA na Sua Turma',
  description: 'Roteiro completo para aplicar ainda esta semana — sem improviso, sem excluir ninguém',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
