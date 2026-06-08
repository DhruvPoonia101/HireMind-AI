import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    {
        month: "Jan",
        score: 72,
    },
    {
        month: "Feb",
        score: 81,
    },
    {
        month: "Mar",
        score: 92,
    },
    {
        month: "Apr",
        score: 95,
    },
];

function ResumeChart() {
    return (
        <div
            className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      mt-8
      "
        >
            <h3 className="text-2xl font-bold mb-6">
                Resume Score Analytics
            </h3>

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid
                            stroke="rgba(255,255,255,0.05)"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="month"
                            stroke="#9ca3af"
                        />

                        <YAxis
                            stroke="#9ca3af"
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#111827",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                color: "white",
                            }}
                            labelStyle={{
                                color: "#9ca3af",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#22d3ee"
                            strokeWidth={4}
                            dot={{
                                r: 7,
                                fill: "#22d3ee",
                                strokeWidth: 2,
                                stroke: "#ffffff",
                            }}
                            activeDot={{
                                r: 9,
                            }}
                            animationDuration={2000}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ResumeChart;