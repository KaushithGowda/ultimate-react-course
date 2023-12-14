export function Footer({ items }) {
  const noOfItems = items?.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = packedItems !== 0 ? (packedItems / noOfItems) * 100 : 0;
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        noOfItems > 0 ? (
          <em>
            You have {noOfItems} Items on your list and packed {packedItems} (
            {percentage} %) items!
          </em>
        ) : (
          <em>Starting adding items and take off🚀</em>
        )
      ) : (
        <em>Hoorah! You Packed everything lets take off🚀</em>
      )}
    </footer>
  );
}
