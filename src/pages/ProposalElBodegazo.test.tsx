import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProposalElBodegazo from './ProposalElBodegazo';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('ProposalElBodegazo', () => {
  it('shows NIT verification form initially', () => {
    render(
      <LanguageProvider>
        <ProposalElBodegazo />
      </LanguageProvider>
    );
    expect(screen.getByText(/Ingrese el NIT para ver la propuesta/i)).toBeInTheDocument();
    expect(screen.queryByText(/Propuesta de Transformación Digital/i)).not.toBeInTheDocument();
  });

  it('shows error message on incorrect NIT', () => {
    render(
      <LanguageProvider>
        <ProposalElBodegazo />
      </LanguageProvider>
    );
    
    const input = screen.getByPlaceholderText(/Ingrese NIT sin dígito de verificación/i);
    const button = screen.getByText(/Verificar/i);

    fireEvent.change(input, { target: { value: '12345' } });
    fireEvent.click(button);

    expect(screen.getByText(/NIT incorrecto/i)).toBeInTheDocument();
    expect(screen.queryByText(/Propuesta de Transformación Digital/i)).not.toBeInTheDocument();
  });

  it('shows proposal content on correct NIT', () => {
    render(
      <LanguageProvider>
        <ProposalElBodegazo />
      </LanguageProvider>
    );
    
    const input = screen.getByPlaceholderText(/Ingrese NIT sin dígito de verificación/i);
    const button = screen.getByText(/Verificar/i);

    // Correct NIT for El Bodegazo
    fireEvent.change(input, { target: { value: '1061021703' } });
    fireEvent.click(button);

    expect(screen.getByText(/Propuesta de Transformación Digital/i)).toBeInTheDocument();
  });
});
