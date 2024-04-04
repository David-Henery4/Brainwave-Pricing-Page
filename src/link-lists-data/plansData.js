const plansData = [
  {
    id: 1,
    planTitle: "Starter",
    isSelected: false,
    planPrice: {
      monthly: "19",
      yearly: "228",
    },
    perks: [
      {
        id: 1,
        includedInPlan: true,
        perkTitle: "Commercial License",
      },
      {
        id: 2,
        includedInPlan: true,
        perkTitle: "100+ HTML UI Elements",
      },
      {
        id: 3,
        includedInPlan: true,
        perkTitle: "01 Domain Support",
      },
      {
        id: 4,
        includedInPlan: false,
        perkTitle: "6 Month Premium Support",
      },
      {
        id: 5,
        includedInPlan: false,
        perkTitle: "Lifetime Updates",
      },
    ],
  },
  {
    id: 2,
    planTitle: "Standard",
    isSelected: true,
    planPrice: {
      monthly: "49",
      yearly: "588",
    },
    perks: [
      {
        id: 1,
        includedInPlan: true,
        perkTitle: "Commercial License",
      },
      {
        id: 2,
        includedInPlan: true,
        perkTitle: "100+ HTML UI Elements",
      },
      {
        id: 3,
        includedInPlan: true,
        perkTitle: "01 Domain Support",
      },
      {
        id: 4,
        includedInPlan: true,
        perkTitle: "6 Month Premium Support",
      },
      {
        id: 5,
        includedInPlan: false,
        perkTitle: "Lifetime Updates",
      },
    ],
  },
  {
    id: 3,
    planTitle: "Premium",
    isSelected: false,
    planPrice: {
      monthly: "99",
      yearly: "1188",
    },
    perks: [
      {
        id: 1,
        includedInPlan: true,
        perkTitle: "Commercial License",
      },
      {
        id: 2,
        includedInPlan: true,
        perkTitle: "100+ HTML UI Elements",
      },
      {
        id: 3,
        includedInPlan: true,
        perkTitle: "01 Domain Support",
      },
      {
        id: 4,
        includedInPlan: true,
        perkTitle: "6 Month Premium Support",
      },
      {
        id: 5,
        includedInPlan: true,
        perkTitle: "Lifetime Updates",
      },
    ],
  },
];

export default plansData;
