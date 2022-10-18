/* File Name: index.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
} 