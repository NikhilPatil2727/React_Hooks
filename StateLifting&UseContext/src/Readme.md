One-line definition (say this first in interview)

State Lifting in React means:
👉 Moving shared state from child components to their common parent so both children can use and update it.

The problem (Child A & Child B case)

Imagine this structure:

Parent
 ├── ChildA  (Increment)
 └── ChildB  (Decrement)


ChildA wants to increase the count

ChildB wants to decrease the same count

❌ Problem:
ChildA cannot directly change ChildB’s state
ChildB cannot directly change ChildA’s state

👉 Sibling components cannot share state directly

The solution → Lift state up to Parent

So we:

Move count state to Parent

Parent passes:

count as props

functions (increment, decrement) as props

This is called State Lifting ✅