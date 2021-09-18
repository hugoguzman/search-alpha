// function LeafletgeoSearch() {
//     const map = useMap(); //here use useMap hook
  
//     useEffect(() => {
//       const provider = new OpenStreetMapProvider();
  
//       const searchControl = new GeoSearchControl({
//         provider,
//         marker: {
//           icon
//         }
//       });
  
//       map.addControl(searchControl);
  
//       return () => map.removeControl(searchControl)
//     }, []);
  
//     return null;
//   }