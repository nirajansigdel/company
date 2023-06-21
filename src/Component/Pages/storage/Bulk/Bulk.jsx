import React, { useEffect, useState } from "react";
import Nav from "../../../Navbar/Nav";

function Bulk() {
  const [selectedFloors, setSelectedFloors] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [selectedRacks, setSelectedRacks] = useState(null);
  const [selectedShelves, setSelectedShelves] = useState(null);
  const [selectedFileNames, setSelectedFileNames] = useState(null);
  const [selectedFileNo, setSelectedFileNo] = useState("-- Select File No --");  

  const data = [
    {
      name: "floor1",
      rooms: [
        {
          name: "room1",
          racks: [
            {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "File 1",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 2",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 3",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 4",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 5",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 6",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 7",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 8",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 9",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 9",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 10",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 11",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 12",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 13",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 14",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 15",
                        file_no: ["1", "2", "3"],
                      },
                      
                      {
                        name: "File 16",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 17",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 18",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 19",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 20",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 21",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 22",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 23",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 24",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 25",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 26",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 27",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 28",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 29",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 30",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 31",
                        file_no: ["1", "2", "3"],
                      },
                      
                      {
                        name: "File 32",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 33",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 34",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 35",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 36",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 37",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 38",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 39",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 40",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 41",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 42",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 43",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 44",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 45",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 46",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 47",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 48",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 49",
                        file_no: ["1", "2", "3"],
                      },
                      {
                        name: "File 50",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack 2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack 3",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack 4",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              }, {
                name: "rack 5",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              }, {
                name: "rack 6",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              }, {
              name: "rack 7",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            }, {
                name: "rack 8",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
            {
              name: "rack  9",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack 10",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
            name: "room 2",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack ",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 3",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 4",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 5",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 6",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 7",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 8",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "room 9",
            racks: [
              {
                name: "rack1",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 2",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 3",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 4",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 5",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 6",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 7",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 8",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 9",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 10",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                    {
                      name: "shelve 11",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 12",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    }, {
                      name: "shelve 13",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
  
                    {
                      name: "shelve 14",
                      file: [
                        {
                          name: "nirajan",
                          file_no: ["1", "2", "3"],
                        },
                      ],
                    },
                ],
              },
              {
                name: "rack2",
                shelves: [
                  {
                    name: "shelve 1",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                ],
              },
            ],
          },

        {
          name: "room 10",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ,
      {
        name: "room1",
        racks: [
          {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "File 1",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 2",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 3",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 4",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 5",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 6",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 7",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 8",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 9",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 9",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 10",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 11",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 12",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 13",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 14",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 15",
                      file_no: ["1", "2", "3"],
                    },
                    
                    {
                      name: "File 16",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 17",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 18",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 19",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 20",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 21",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 22",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 23",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 24",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 25",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 26",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 27",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 28",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 29",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 30",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 31",
                      file_no: ["1", "2", "3"],
                    },
                    
                    {
                      name: "File 32",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 33",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 34",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 35",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 36",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 37",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 38",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 39",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 40",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 41",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 42",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 43",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 44",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 45",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 46",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 47",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 48",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 49",
                      file_no: ["1", "2", "3"],
                    },
                    {
                      name: "File 50",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack 2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack 3",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack 4",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            }, {
              name: "rack 5",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            }, {
              name: "rack 6",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            }, {
            name: "rack 7",
            shelves: [
              {
                name: "shelve 1",
                file: [
                  {
                    name: "nirajan",
                    file_no: ["1", "2", "3"],
                  },
                ],
              },
              {
                  name: "shelve 2",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 2",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 3",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 4",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 5",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 6",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 7",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 8",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 9",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 10",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 11",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                }, {
                  name: "shelve 12",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                }, {
                  name: "shelve 13",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },

                {
                  name: "shelve 14",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
            ],
          }, {
              name: "rack 8",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
          {
            name: "rack  9",
            shelves: [
              {
                name: "shelve 1",
                file: [
                  {
                    name: "nirajan",
                    file_no: ["1", "2", "3"],
                  },
                ],
              },
              {
                  name: "shelve 2",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 2",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 3",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 4",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 5",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 6",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 7",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 8",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 9",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 10",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  name: "shelve 11",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                }, {
                  name: "shelve 12",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                }, {
                  name: "shelve 13",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },

                {
                  name: "shelve 14",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
            ],
          },
          {
            name: "rack 10",
            shelves: [
              {
                name: "shelve 1",
                file: [
                  {
                    name: "nirajan",
                    file_no: ["1", "2", "3"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
          name: "room 2",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack ",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 3",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 4",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 5",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 6",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 7",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 8",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room 9",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 2",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 10",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  }, {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },

                  {
                    name: "shelve 14",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },

      {
        name: "room 10",
        racks: [
          {
            name: "rack1",
            shelves: [
              {
                name: "shelve 1",
                file: [
                  {
                    name: "nirajan",
                    file_no: ["1", "2", "3"],
                  },
                ],
              },
            ],
          },
          {
            name: "rack2",
            shelves: [
              {
                name: "shelve 1",
                file: [
                  {
                    name: "nirajan",
                    file_no: ["1", "2", "3"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    },
    {
      name: "floor2",
      rooms: [
        {
          name: "room1",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 2",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
                {
                    name: "shelve 3",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 4",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 5",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 6",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 7",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 8",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 9",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 11",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 12",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
                  {
                    name: "shelve 13",
                    file: [
                      {
                        name: "nirajan",
                        file_no: ["1", "2", "3"],
                      },
                    ],
                  },
              ],
            },
          ],
        },
        {
          name: "room2",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

 

  console.log(selectedFloors, selectedRooms, selectedRacks,selectedShelves,selectedFileNames,selectedFileNo);
  return (
    <>
    <div className="main">
    <Nav/>
        <div className="container">

        {/* =======================for floor=================== */}
      <select onChange={(e) => setSelectedFloors(data.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Floor</option>
        {
          data.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>
     
          {/* =======================for room ===================  */}
      {selectedFloors && <select onChange={(e) => setSelectedRooms(selectedFloors.rooms.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Rooms</option>
        {
          selectedFloors.rooms.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>}
    
            {/* =======================for rack ===================  */}
      {selectedRooms && <select onChange={(e) => setSelectedRacks(selectedRooms.racks.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Racks</option>
        {
          selectedRooms.racks.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
         
         {/* =======================for shelve ===================  */}
          
      </select>}
      {selectedRacks && <select onChange={(e) => setSelectedShelves(selectedRacks.shelves.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Shelves</option>
        {
         selectedRacks.shelves.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>}
       {/* =======================for File Name ===================  */}
      {selectedShelves && <select onChange={(e) => setSelectedFileNames(selectedShelves.file.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select File Name</option>
        {
         selectedShelves.file.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>}
        {/* =======================for File no ===================  */}
      {selectedFileNames && <select onChange={(e) => setSelectedFileNo(selectedFileNames.file_no.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select File No</option>
        {
         selectedFileNames.file_no.map(i =>
            <option key={i} value={i}>{i}</option>
          )
        }
      </select>}
      <div>
       

        
        
      </div>
      </div>
      </div>
    </>
  );
}

export default Bulk;
