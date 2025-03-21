const id = "Language Rules/precedence.md";
						const collection = "docs";
						const slug = "language-rules/precedence";
						const body = "\nPrecedence rules in C3 differs from C/C++. Here are all precedence levels in C3, listed from highest (1) to lowest (11):\n\n1. `()`, `[]`, `.`, `!!` postfix `!`, `++` and `--` \n2. `@`, prefix `-`, `~`, prefix `*`, `&`, prefix `++` and `--`\n3. infix `*`, `/`, `%`\n4. `<<`, `>>`\n5. `^`, `|`, infix `&`\n6. `+`, infix `-`, `+++`\n7. `==`, `!=`, `>=`, `<=`, `>`, `<`\n8. `&&`, `&&&`\n9. `||`, `|||`\n10. ternary `?:` `??`\n11. `=`, `*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `&=`, `^=`, `|=`\n\n\nThe main difference is that bitwise operations and shift has higher precedence than addition/subtraction and multiplication/division in C3. Bitwise operations also have higher precedence than the relational operators. Also, there is no difference in precedence between `&&` and `||` or between the bitwise operators.\n\nExamples:\n\n```c3\na + b >> c + d\n\n(a + b) >> (c + d) // C (+ - are evaluated before >>)\na + (b >> c) + d   // C3 (>> is evaluated before + -)\n\n\na & b == c\n\na & (b == c)       // C  (bitwise operators are evaluated after relational)\n(a & b) == c       // C3 (bitwise operators are evaluated before relational)\n\n\na > b == c < d\n\n(a > b) == (c < d) // C  (< > binds tighter than ==)\n((a > b) == c) < d // C3 Error, requires parenthesis!\n\n\na | b ^ c & d\n\na | ((b ^ c) & d)  // C  (All bitwise operators have different precedence)\n((a | b) ^ c) & d  // C3 Error, requires parenthesis!\n```\n\nThe change in precedence of the bitwise operators corrects a long standing issue in the C specification. The change in precedence for shift operations goes towards making the precedence less surprising.\n\nConflating the precedence of relational and equality operations, and all bitwise operations was motivated by simplification: few remember the exact internal differences in precedence between bitwise operators. Parenthesis are required for those conflated levels of precedence.\n\nLeft-to-right offers a very simple model to think about the internal order of operations, and encourages use of explicit ordering, as best practice in C is to use parentheses anyway.\n";
						const data = {title:"Precedence",description:"Precedence",editUrl:true,head:[],template:"doc",sidebar:{order:211,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Rules/precedence.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
