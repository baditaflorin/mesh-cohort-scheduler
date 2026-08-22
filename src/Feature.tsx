import { useAvailabilityGrid, type MeshConfig, type YRoom } from "@baditaflorin/mesh-common";
type Props = { room: YRoom | null; config: MeshConfig };
const slots = ["Tue 18:00", "Wed 18:00", "Thu 18:00", "Sat 10:00"];
export function Feature({ room, config }: Props) {
  const grid = useAvailabilityGrid(room, "cohort-slots");
  const mine = grid.availability[room?.peerId ?? ""] ?? [];
  return (
    <main className="feature-placeholder">
      <p className="feature-status">
        {room ? `${room.peerCount} peer(s) choosing` : "Connecting…"}
      </p>
      <h1>{config.appName}</h1>
      <p>
        Pick every time you can make. Each peer keeps one small availability record in the room.
      </p>
      <fieldset>
        <legend>Your availability</legend>
        {slots.map((slot) => (
          <label key={slot} style={{ display: "block", textAlign: "left", padding: ".35rem" }}>
            <input
              type="checkbox"
              checked={mine.includes(slot)}
              onChange={(event) => grid.setAvailable(slot, event.target.checked)}
            />{" "}
            {slot}
          </label>
        ))}
      </fieldset>
      <h2>Best overlap</h2>
      <p aria-live="polite">
        {grid.bestSlots[0]
          ? `${grid.bestSlots[0]} is currently the strongest match.`
          : "Waiting for availability."}
      </p>
    </main>
  );
}
