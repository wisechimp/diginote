const notebook = [
  {
    id: 1000,
    title: "Note 1",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "A note. Another note",
            },
          ],
        },
      ],
    },
    user_id: 200,
    notebook_id: 100,
    created_at: 70000,
    updated_at: 90000,
  },
  {
    id: 1001,
    title: "Note 2",
    content: [
      {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "A note. Another note",
              },
            ],
          },
        ],
      },
    ],
    user_id: 200,
    notebook_id: 100,
    created_at: 700000,
    updated_at: 900000,
  },
  {
    id: 1002,
    title: "Note 3",
    content: [
      {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "A note. Another note",
              },
            ],
          },
        ],
      },
    ],
    user_id: 200,
    notebook_id: 100,
    created_at: 7000000,
    updated_at: 9000000,
  },
]

export default notebook
