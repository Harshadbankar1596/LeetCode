var isSubPath = function(head, root) {
    function match(root, node) {
        if (!node) return true;
        if (!root) return false;

        if (root.val !== node.val) return false;

        return match(root.left, node.next) || match(root.right, node.next);
    }

    function traverse(root) {
        if (!root) return false;

        return (
            match(root, head) ||
            traverse(root.left) ||
            traverse(root.right)
        );
    }

    return traverse(root);
};