export function Input({value}) {
    return <label htmlFor="input">
            <input id="input" type="text" value={value} />
        </label>
}