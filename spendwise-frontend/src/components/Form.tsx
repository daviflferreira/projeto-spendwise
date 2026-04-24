import { useState } from "react";
import type { Expense } from "../types/Expense";

type MyFormProps = {
    onAddExpense: (expense: Expense) => void;
}

export function MyForm({ onAddExpense }: MyFormProps) {

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const expense = {
            id: Date.now(),
            description,
            category,
            amount: Number(amount),
            date,
        };
        onAddExpense(expense);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Descrição:
            <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br/>
        <label>
            Categoria:
            <input value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br/>
        <label>
            Quantia em R$:
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br/>
        <label>
            Data:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <hr />

        <button type="submit">Enviar Formulário</button>
    </form>
  )

}