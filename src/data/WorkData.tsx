interface DataType {
   id: number;
   icon: string;
   number: string;
   title: string;
   desc: JSX.Element;
   shape: string;
}

const work_data: DataType[] = [
   {
      id: 1,
      number: "01",
      icon: "flaticon-package",
      title: "item1",
      desc: (<>Submit your shipment details, and we provide a tailored quote.</>),
      shape: "/assets/img/images/work_shape01.svg",
   },
   {
      id: 2,
      number: "02",
      icon: "flaticon-support",
      title: "item2",
      desc: (<>We collect your goods from the specified location and prepare for transit.</>),
      shape: "/assets/img/images/work_shape02.svg",
   },
   {
      id: 3,
      number: "03",
      icon: "flaticon-global-distribution",
      title: "item3",
      desc: (<>Your cargo is transported via land, air, sea, or rail, with customs clearance handled efficiently.</>),
      shape: "/assets/img/images/work_shape01.svg",
   },
   {
      id: 4,
      number: "04",
      icon: "flaticon-parcel",
      title: "item4",
      desc: (<>We ensure secure delivery to the final destination with tracking updates.</>),
      shape: "/assets/img/images/work_shape01.svg",
   },
];

export default work_data;