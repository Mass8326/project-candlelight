export default {
  "version": "1.0.0",
  "title": "Spell Sheet",
  "sections": [
    { "heading": "Cantrips",
      "spells": [
        { "name": "Prestidigitation",
          "memo": "",
          "info": [
            "Transmutation Cantrip",
            "Casting Time: 1 action",
            "Range: 10 ft",
            "Components: V, S",
            "Duration: Up to 1 hour"
          ],
          "desc": [
            "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:",
            "- You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.",
            "- You instantaneously light or snuff out a candle, a torch, or a small campfire.",
            "- You instantaneously clean or soil an object no larger than 1 cubic foot.",
            "- You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.",
            "- You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.",
            "- You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.",
            "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
          ]
        },
        { "name": "Eldritch Blast",
          "memo": "1d10 force",
          "info": [
            "Evocation Cantrip",
            "Casting Time: 1 action",
            "Range: 120 ft",
            "Components: V, S",
            "Duration: Instantaneous"
          ],
          "desc": [
            "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
            "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
          ]
        }
      ]
    },
    { "heading": "Level 1",
      "spells": [
        { "name": "Charm Person",
          "memo": "Wis DC",
          "info": [
            "1st Level Enchantment",
            "Casting Time: 1 action",
            "Range: 30 ft",
            "Components: V, S",
            "Duration: 1 hour"
          ],
          "desc": [
            "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails it is charmed by you until the spell ends or until you or your companions do something harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends it knows it has been charmed.",
            "At higher levels.<br>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.They must be within 30ft of each other when you target them."
          ]
        },
        { "name": "Detect Magic",
          "memo": "",
          "info": [
            "1st Level Divination",
            "Casting Time: 1 action",
            "Range: self",
            "Components: V, S",
            "Duration: Concentration, 10 min"
          ],
          "desc": [
            "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
            "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
          ]
        }
      ]
    }
  ]
}