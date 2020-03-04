function solution(skill, skillTrees) {
    const filter = new RegExp(`(?!${ skill.split('').join('|') }).`, 'g');
    
    return skillTrees.filter(tree => skill.indexOf(tree.replace(filter, '')) === 0).length;
}