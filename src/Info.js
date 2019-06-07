import {types} from "mobx-state-tree"

const Info = types.model({
    text: ""
})
.actions(self => ({
    setText(newText) {
        self.text = newText;
    }
}))

export default Info;
