import React from "react"
import {Stack, Typography} from "../../../common";
import AddIcon from "../../../common/Icons/AddIcon";
import DeleteIcon from "../../../common/Icons/DeleteIcon";
import {AuthorDto} from "../../../Dto/AuthorDto";

interface Props {
    author: AuthorDto,
    onAdd?: (author: AuthorDto) => void,
    onRemove?: (author: AuthorDto) => void
}

const AuthorItem: React.FC<Props> = ({author, onAdd, onRemove}) => {

    return (
        <Stack flexDirection={"row"} style={{maxHeight: 20}}>
            <Typography style={{fontSize: 14, marginRight: 8}}>{author.name}</Typography>
            {onAdd && <button onClick={() => {
                onAdd(author);
            }}>
                <AddIcon/>
            </button>}
            {onRemove && <button onClick={() => {
                onRemove(author);
            }}>
                <DeleteIcon/>
            </button>}
        </Stack>
    )
}

export default AuthorItem