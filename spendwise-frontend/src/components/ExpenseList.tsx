import type { Expense } from "../types/Expense";

type ExpenseListProps = {
    expenses: Expense[];
};

export function ExpenseList({ expenses }: ExpenseListProps) {
    return (
        <div>
            {expenses.map((expense) => (
                <div key={expense.id}>
                    <p>{expense.description}</p>
                    <p>R$ {expense.amount}</p>
                </div>
            ))}
        </div>
    );
}