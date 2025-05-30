import { DeepComponent } from "./DeepComponent"
import { DeepComponentWithState } from "./DeepComponentWithState"
import { StateProvider } from "./StateContext"
import { TestComponent } from "./TestComponent"
import { TestComponentWithState } from "./TestComponentWithState"

const page: React.FC = () => {
  return (
    <div className="inside-container">
      <div>
        <h2 className="text-xl font-bold p-4">With useUI (no context, no re-renders)</h2>

        <TestComponent />
        <DeepComponent />
      </div>
      <hr />

      <StateProvider>
        <div className="mt-20">
          <h2 className="text-xl font-bold p-4">With React State (Check console for re-renders)</h2>
          <TestComponentWithState />
          <DeepComponentWithState />
        </div>
      </StateProvider>
    </div>
  )
}

export default page
