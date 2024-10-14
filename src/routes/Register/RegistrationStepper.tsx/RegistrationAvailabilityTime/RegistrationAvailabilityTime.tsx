import { useState } from "react"
import { days } from "../../../../dummyData"
import { Box, Button, ToggleButton, ToggleButtonGroup } from "@mui/material"

export default function RegistrationAvailabilityTime() {
    const [selectedDays, setSelectedDays] = useState<string[]>([])

    const handleDaysToggle = (event: React.MouseEvent<HTMLElement>, newSelectedDays: string[]) => {
        setSelectedDays(newSelectedDays)
    }

    return (
        <Box display='flex' justifyContent='center' mt={2}>
            <ToggleButtonGroup value={selectedDays} onChange={handleDaysToggle} sx={{ justifyContent: 'center' }}>
                {days.map(day => (
                    <>
                        <ToggleButton
                            value={day}
                            selected={selectedDays.includes(day)}>
                            {day}
                        </ToggleButton>
                    </>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}