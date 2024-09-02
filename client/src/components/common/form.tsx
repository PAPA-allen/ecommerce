import { ChangeEvent, FC, FormEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


interface FormData {
    [key: string]: string;
  }
interface FormControlItem {
    id:string;
    name: string;
    label: string;
    componentType: 'input' | 'select' | 'textarea';
    placeholder?: string;
    type?: string;
    options:[
        {
            id:string,
            label:string
        }
    ]
}

interface CommonFormProps {
    formControls: FormControlItem[];
    formData:FormData;
    setFormData:(formData:FormData)=>void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    buttonText:string;
}

type ControlItem = Omit<FormControlItem, 'label'>;

const CommonForm: FC<CommonFormProps> = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

    const renderInputsByControlItem = (getControlItem: ControlItem) => {
        let element = null;
        const value = formData[getControlItem.name] || ''
        switch (getControlItem.componentType) {
            case 'input':
                element = <Input
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type}
                    value={value} 
                    onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>setFormData({
                        ...formData,
                        [getControlItem.name]:e.target.value
                    })}/>
                break;
            case 'select':
                element = <Select value={value} onValueChange={(value:string)=>setFormData({
                    ...formData,
                    [getControlItem.name]:value}
                )}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {getControlItem.options && 
                        getControlItem.options.length > 0?
                    getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>):null}
                    </SelectContent>
                </Select>
                break;
            case 'textarea':
                element = <Input
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type} 
                    value={value}
                    onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>setFormData({
                        ...formData,
                        [getControlItem.name]:e.target.value
                    })}/>
                break;

            default:
                element = <Textarea
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.id}
                value={value}
                onChange={(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>setFormData({
                    ...formData,
                    [getControlItem.name]:e.target.value
                })}
                />
                break;
        }
        return element;
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {formControls.map(controlItem => (
                    <div key={controlItem.name} className="grid w-full gap-1.5">
                        <Label className="mb-1">
                            {controlItem.label}
                        </Label>
                        {
                            renderInputsByControlItem(controlItem)
                        }
                    </div>
                ))}
            </div>
            <Button className="mt-2 w-full" type="submit">{buttonText || "Submit"}</Button>
        </form>
    );
};

export default CommonForm;
