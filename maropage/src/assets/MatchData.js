export default [{
  placement: 3, // 등수
  time_eliminated: 2135.6103515625, // 리눅스시간?

  // 특성
  metaTraitDTO: [
    {
      // -> 한국어,,,
      name: "Set6_Bodyguard",
      style: 1,
    },
    {
      name: "Set6_Clockwork",
      style: 2,
    },
  ],
  // 증강체
  augments: [
    // -> 한국어,,,
    "TFT6_Augment_SyndicateEmblem2",
    "TFT6_Augment_BinaryAirdrop",
    "TFT6_Augment_Weakspot2",
  ],

  // 유닛 정보
  unitDTO: [
    {
      // 아이템
      items: [0, 1, 2],
      // 캐릭터 ID
      character_id: "TFT6_Darius",
      // 아이템 이름
      itemNames: ["itemname1", "itemname2", "itemname3"],
      // 코스트??? 0:1 ,...
      rarity: 0,
      // 성 -> 3성
      tier: 3,
    },
    {
      items: [2, 3, 4],
      character_id: "TFT6_Ashe",
      itemNames: ["itemname1", "itemname2", "itemname3"],
      name: "",
      rarity: 1,
      tier: 2,
    },
    {
      items: [0, 3],
      character_id: "TFT6_Morgana",
      itemNames: ["itemname1", "itemname2"],
      name: "",
      rarity: 2,
      tier: 1,
    },
  ],
  // 같이 게임한 사람들
  participantName: [
    "플레이어1",
    "플레이어2",
    "플레이어3",
    "플레이어4",
    "플레이어5",
    "플레이어6",
    "플레이어7",
    "내 이름",
  ],
}];
