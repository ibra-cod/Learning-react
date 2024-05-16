export function Checkbox({value}) {
    return <label htmlFor="input">
            <input id="checkbox" type="checkbox" value={value} />
            {'N\'afficher que les produits en stock'}
        </label>
}