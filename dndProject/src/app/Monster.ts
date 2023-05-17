export interface Monster {
    index: string;
    name: string;
    size: string;
    type: string;
    alignment: string;
    armor_class: { type: string; value: number }[];
    hit_points: number;
    hit_dice: string;
    hit_points_roll: string;
    speed: { walk: string };
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    proficiencies: any[]; // Update this type if you have specific data
    damage_vulnerabilities: string[];
    damage_resistances: string[];
    damage_immunities: string[];
    condition_immunities: { index: string; name: string; url: string }[];
    senses: { blindsight: string; passive_perception: number };
    languages: string;
    challenge_rating: number;
    xp: number;
    special_abilities: { name: string; desc: string }[];
    actions: {
      name: string;
      multiattack_type: string;
      desc: string;
      actions: { action_name: string; count: number; type: string }[];
    }[];
    image: string;
    url: string;
    legendary_actions: any[]; // Update this type if you have specific data
  }
  