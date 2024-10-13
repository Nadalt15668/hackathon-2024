import {
  Backdrop,
  CircularProgress,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import toast from "react-hot-toast";
import Page from "../../../common/Page/Page";
import { Event, EventUrgency } from "../../../types";
import "./CreateEvent.scss";

function CreateEvent() {
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState<Event>({
    id: "",
    description: "",
    location: {
      streetName: "",
      streetNumber: 0,
    },
    time: new Date(),
    urgency: "low",
    requires: [],
    volunteers: [],
  });

  const getDisplayTime = () => {
    const displayTime = new Date(event.time);
    displayTime.setMinutes(
      displayTime.getMinutes() - displayTime.getTimezoneOffset()
    );

    return displayTime.toISOString().slice(0, 16);
  };

  const setTime = (dateString: string) => {
    const [datePart, timePart] = dateString.split("T");

    const [year, month, day] = datePart.split("-");
    const [hours, minutes] = timePart.split(":");

    const newTime = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes)
    );

    setEvent((prev) => {
      return {
        ...prev,
        time: newTime,
      };
    });
  };

  return (
    <Page>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography className="orange-theme-title">יצירת אירוע</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "25rem",
          }}
        >
          <TextField
            label="תיאור"
            required
            value={event.description}
            onChange={(event) =>
              setEvent((prev) => {
                return {
                  ...prev,
                  description: event.target.value,
                };
              })
            }
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="רחוב"
              required
              value={event.location.streetName}
              style={{
                width: "19.5rem",
              }}
              onChange={(event) =>
                setEvent((prev) => {
                  return {
                    ...prev,
                    location: {
                      ...prev.location,
                      streetName: event.target.value,
                    },
                  };
                })
              }
            />
            <TextField
              label="מספר בית"
              inputProps={{ style: { textAlign: "center" } }}
              value={event.location.streetNumber}
              style={{
                width: "5rem",
              }}
              onChange={(event) =>
                !isNaN(Number(event.target.value)) &&
                setEvent((prev) => {
                  return {
                    ...prev,
                    location: {
                      ...prev.location,
                      streetNumber: Number(event.target.value),
                    },
                  };
                })
              }
            />
          </div>
          <TextField
            value={getDisplayTime()}
            onChange={(event) => setTime(event.target.value)}
            type="datetime-local"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              direction: "ltr",
              justifyContent: "center",
            }}
          >
            <ToggleButtonGroup
              exclusive
              value={event.urgency}
              onChange={(event, urgency: EventUrgency) =>
                urgency &&
                setEvent((prev) => {
                  return {
                    ...prev,
                    urgency: urgency,
                  };
                })
              }
            >
              <ToggleButton value={"critical" as EventUrgency}>
                קריטי
              </ToggleButton>
              <ToggleButton value={"high" as EventUrgency}>גבוה</ToggleButton>
              <ToggleButton value={"medium" as EventUrgency}>
                בינוני
              </ToggleButton>
              <ToggleButton value={"low" as EventUrgency}>נמוך</ToggleButton>
            </ToggleButtonGroup>
            <Typography>דחיפות</Typography>
          </div>
          <Button
            style={{
              height: "3.5rem",
            }}
            variant="contained"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                toast.success("האירוע נוצר בהצלחה!");
                setEvent({
                  id: "",
                  description: "",
                  location: {
                    streetName: "",
                    streetNumber: 0,
                  },
                  time: new Date(),
                  urgency: "low",
                  requires: [],
                  volunteers: [],
                });
              }, 1000);
            }}
          >
            צור אירוע
          </Button>
        </div>
      </div>
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    </Page>
  );
}

export default CreateEvent;
