import mongoose = require('mongoose');
import { Roleschema } from './models/Role';
import { roletypes } from './assets/role';

const roletypemodel = mongoose.model('Role', Roleschema);

export class SeedService {

    constructor() { }

    public create(): void {
        roletypes.forEach(roles => {
            roletypemodel.findOneAndUpdate({ role: roles['role'] },
                roles, { new: true }).then((data) => {
                    if (data === null) {
                        let roletype = new roletypemodel(roles);
                        roletype.save();
                    }
                });
        });
    }
}