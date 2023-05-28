import { colorScales } from '@/styles/colors';
import { ThemeAppearance } from 'antd-style';

export const themeConfig: any = (isDarkMode: ThemeAppearance) => {
  const type = isDarkMode ? 'dark' : 'light';
  const theme = {
    red: isDarkMode ? colorScales.tomato[type][9] : colorScales.red[type][10],
    brightRed: isDarkMode ? colorScales.tomato[type][9] : colorScales.red[type][10],
    yellow: isDarkMode ? colorScales.amber[type][9] : colorScales.amber[type][10],
    brightYellow: isDarkMode ? colorScales.yellow[type][9] : colorScales.brown[type][10],
    green: isDarkMode ? colorScales.lime[type][9] : colorScales.grass[type][10],
    brightGreen: isDarkMode ? colorScales.lime[type][9] : colorScales.grass[type][10],
    cyan: '#42b3c2',
    brightCyan: '#4cd1e0',
    blue: isDarkMode ? colorScales.sky[type][9] : colorScales.blue[type][10],
    brightBlue: isDarkMode ? colorScales.sky[type][9] : colorScales.blue[type][10],
    magenta: '#c162de',
    brightMagenta: isDarkMode ? colorScales.purple[type][10] : colorScales.violet[type][10],
    white: isDarkMode ? colorScales.slate[type][10] : colorScales.gray[type][10],
    brightWhite: isDarkMode ? colorScales.gray[type][11] : colorScales.gray[type][10],
    black: isDarkMode ? colorScales.slate[type][10] : colorScales.gray[type][10],
    brightBlack: '#4f5666',
  };

  const color0 = '#ffffff';
  const color1 = '#56b6c2';
  const color2 = theme.brightMagenta;
  const color3 = theme.yellow;
  const color4 = '#abb2bf';
  const color5 = theme.brightWhite;
  const color6 = theme.brightBlue;
  const color7 = theme.yellow;
  const color8 = '#5c6370';
  const color9 = theme.brightGreen;
  const colorA = '#f44747';
  const colorB = '#BE5046';
  const colorC = '#7f848e';

  return {
    name: type,
    type,
    semanticHighlighting: true,
    semanticTokenColors: {
      enumMember: {
        foreground: color1,
      },
      'variable.constant': {
        foreground: color2,
      },
      'variable.defaultLibrary': {
        foreground: color3,
      },
      'variable:dart': {
        foreground: color2,
      },
      'property:dart': {
        foreground: color2,
      },
      'annotation:dart': {
        foreground: color2,
      },
      'parameter.label:dart': {
        foreground: color4,
      },
      macro: {
        foreground: color2,
      },
      tomlArrayKey: {
        foreground: color3,
      },
    },
    tokenColors: [
      {
        scope: 'meta.embedded',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'unison punctuation',
        scope:
          'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'haskell variable generic-type',
        scope: 'variable.other.generic-type.haskell',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'haskell storage type',
        scope: 'storage.type.haskell',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'support.variable.magic.python',
        scope: 'support.variable.magic.python',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'punctuation.separator.parameters.python',
        scope:
          'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'variable.parameter.function.language.special.self.python',
        scope: 'variable.parameter.function.language.special.self.python',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'variable.parameter.function.language.special.cls.python',
        scope: 'variable.parameter.function.language.special.cls.python',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'storage.modifier.lifetime.rust',
        scope: 'storage.modifier.lifetime.rust',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'support.function.std.rust',
        scope: 'support.function.std.rust',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'entity.name.lifetime.rust',
        scope: 'entity.name.lifetime.rust',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'variable.language.rust',
        scope: 'variable.language.rust',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'support.constant.edge',
        scope: 'support.constant.edge',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'regexp constant character-class',
        scope: 'constant.other.character-class.regexp',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'keyword.operator',
        scope: ['keyword.operator.word'],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'regexp operator.quantifier',
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Text',
        scope: 'variable.parameter.function',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Comment Markup Link',
        scope: 'comment markup.link',
        settings: {
          foreground: color8,
        },
      },
      {
        name: 'markup diff',
        scope: 'markup.changed.diff',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'diff',
        scope:
          'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'inserted.diff',
        scope: 'markup.inserted.diff',
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'deleted.diff',
        scope: 'markup.deleted.diff',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'c++ function',
        scope: 'meta.function.c,meta.function.cpp',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'c++ block',
        scope:
          'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'js/ts punctuation separator key-value',
        scope: 'punctuation.separator.key-value',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'js/ts import keyword',
        scope: 'keyword.operator.expression.import',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'math js/ts',
        scope: 'support.constant.math',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'math property js/ts',
        scope: 'support.constant.property.math',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'js/ts variable.other.constant',
        scope: 'variable.other.constant',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'java type',
        scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'java source',
        scope: 'source.java',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'java modifier.import',
        scope:
          'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'java modifier.import',
        scope: 'meta.method.java',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'java modifier.import',
        scope: 'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'java instanceof',
        scope: 'keyword.operator.instanceof.java',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'java variable.name',
        scope: 'meta.definition.variable.name.java',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'operator logical',
        scope: 'keyword.operator.logical',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'operator bitwise',
        scope: 'keyword.operator.bitwise',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'operator channel',
        scope: 'keyword.operator.channel',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'support.constant.property-value.scss',
        scope: 'support.constant.property-value.scss,support.constant.property-value.css',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'CSS/SCSS/LESS Operators',
        scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'css color standard name',
        scope:
          'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'css comma',
        scope: 'punctuation.separator.list.comma.css',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'css attribute-name.id',
        scope: 'support.constant.color.w3c-standard-color-name.css',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'css property-name',
        scope: 'support.type.vendored.property-name.css',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'js/ts module',
        scope: 'support.module.node,support.type.object.module,support.module.node',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'entity.name.type.module',
        scope: 'entity.name.type.module',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'js variable readwrite',
        scope:
          'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'js/ts json',
        scope: 'support.constant.json',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'js/ts Keyword',
        scope: [
          'keyword.operator.expression.instanceof',
          'keyword.operator.new',
          'keyword.operator.ternary',
          'keyword.operator.optional',
          'keyword.operator.expression.keyof',
        ],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'js/ts console',
        scope: 'support.type.object.console',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'js/ts support.variable.property.process',
        scope: 'support.variable.property.process',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'js console function',
        scope: 'entity.name.function,support.function.console',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'keyword.operator.misc.rust',
        scope: 'keyword.operator.misc.rust',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'keyword.operator.sigil.rust',
        scope: 'keyword.operator.sigil.rust',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'operator',
        scope: 'keyword.operator.delete',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'js dom',
        scope: 'support.type.object.dom',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'js dom variable',
        scope: 'support.variable.dom,support.variable.property.dom',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'keyword.operator',
        scope:
          'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'C operator assignment',
        scope:
          'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Punctuation',
        scope: 'punctuation.separator.delimiter',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Other punctuation .c',
        scope: 'punctuation.separator.c,punctuation.separator.cpp',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'C type posix-reserved',
        scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'keyword.operator.sizeof.c',
        scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'python parameter',
        scope: 'variable.parameter.function.language.python',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'python type',
        scope: 'support.type.python',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'python logical',
        scope: 'keyword.operator.logical.python',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'pyCs',
        scope: 'variable.parameter.function.python',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'python block',
        scope:
          'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'python function-call.generic',
        scope: 'meta.function-call.generic.python',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'python placeholder reset to normal string',
        scope: 'constant.character.format.placeholder.other.python',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Operators',
        scope: 'keyword.operator',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Compound Assignment Operators',
        scope: 'keyword.operator.assignment.compound',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Compound Assignment Operators js/ts',
        scope: 'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Namespaces',
        scope: 'entity.name.namespace',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Variables',
        scope: 'variable',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Variables',
        scope: 'variable.c',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Language variables',
        scope: 'variable.language',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Java Variables',
        scope: 'token.variable.parameter.java',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Java Imports',
        scope: 'import.storage.java',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Packages',
        scope: 'token.package.keyword',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Packages',
        scope: 'token.package',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Functions',
        scope: [
          'entity.name.function',
          'meta.require',
          'support.function.any-method',
          'variable.function',
        ],
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'Classes',
        scope: 'entity.name.type.namespace',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Classes',
        scope: 'support.class, entity.name.type.class',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Class name',
        scope: 'entity.name.class.identifier.namespace.type',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Class name',
        scope: ['entity.name.class', 'variable.other.class.js', 'variable.other.class.ts'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Class name php',
        scope: 'variable.other.class.php',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Type Name',
        scope: 'entity.name.type',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Keyword Control',
        scope: 'keyword.control',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Control Elements',
        scope: 'control.elements, keyword.operator.less',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Methods',
        scope: 'keyword.other.special-method',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'Storage',
        scope: 'storage',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Storage JS TS',
        scope: 'token.storage',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
        scope:
          'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Java Storage',
        scope: 'token.storage.type.java',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Support',
        scope: 'support.function',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'Support type',
        scope: 'support.type.property-name',
        settings: {
          foreground: color4,
        },
      },
      {
        name: '[VSCODE-CUSTOM] toml support',
        scope:
          'support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Support type',
        scope: 'support.constant.property-value',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Support type',
        scope: 'support.constant.font-name',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Meta tag',
        scope: 'meta.tag',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Strings',
        scope: 'string',
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'Constant other symbol',
        scope: 'constant.other.symbol',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'Integers',
        scope: 'constant.numeric',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Constants',
        scope: 'constant',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Constants',
        scope: 'punctuation.definition.constant',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Tags',
        scope: 'entity.name.tag',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Attribute IDs',
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'Attribute class',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Selector',
        scope: 'meta.selector',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Headings',
        scope: 'markup.heading',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Headings',
        scope: 'markup.heading punctuation.definition.heading, entity.name.section',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'Units',
        scope: 'keyword.other.unit',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Bold',
        scope: 'markup.bold,todo.bold',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Bold',
        scope: 'punctuation.definition.bold',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'markup Italic',
        scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'emphasis md',
        scope: 'emphasis md',
        settings: {
          foreground: color6,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown headings',
        scope: 'entity.name.section.markdown',
        settings: {
          foreground: color5,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
        scope: 'punctuation.definition.heading.markdown',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'punctuation.definition.list.begin.markdown',
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: color3,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown heading setext',
        scope: 'markup.heading.setext',
        settings: {
          foreground: color4,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
        scope: 'punctuation.definition.bold.markdown',
        settings: {
          foreground: color2,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.markdown',
        settings: {
          foreground: color9,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.string.markdown',
        settings: {
          foreground: color9,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw punctuation',
        scope: 'punctuation.definition.raw.markdown',
        settings: {
          foreground: color3,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
        scope: 'punctuation.definition.list.markdown',
        settings: {
          foreground: color3,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
        scope: [
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
          'punctuation.definition.metadata.markdown',
        ],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'beginning.punctuation.definition.list.markdown',
        scope: ['beginning.punctuation.definition.list.markdown'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
        scope: 'punctuation.definition.metadata.markdown',
        settings: {
          foreground: color5,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
        scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
        settings: {
          foreground: color6,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
        scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
        settings: {
          foreground: color7,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc Inline Raw',
        scope: 'markup.raw.monospace.asciidoc',
        settings: {
          foreground: color9,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition',
        scope: 'punctuation.definition.asciidoc',
        settings: {
          foreground: color3,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc List Punctuation Definition',
        scope: 'markup.list.asciidoc',
        settings: {
          foreground: color3,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc underline link',
        scope: 'markup.link.asciidoc,markup.other.url.asciidoc',
        settings: {
          foreground: color6,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc link name',
        scope: 'string.unquoted.asciidoc,markup.other.url.asciidoc',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'Regular Expressions',
        scope: 'string.regexp',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'Embedded',
        scope: 'punctuation.section.embedded, variable.interpolation',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Embedded',
        scope: 'punctuation.section.embedded.begin,punctuation.section.embedded.end',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'illegal',
        scope: 'invalid.illegal',
        settings: {
          foreground: color0,
        },
      },
      {
        name: 'illegal',
        scope: 'invalid.illegal.bad-ampersand.html',
        settings: {
          foreground: color4,
        },
      },
      {
        scope: 'invalid.illegal.unrecognized-tag.html',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Broken',
        scope: 'invalid.broken',
        settings: {
          foreground: color0,
        },
      },
      {
        name: 'Deprecated',
        scope: 'invalid.deprecated',
        settings: {
          foreground: color0,
        },
      },
      {
        name: 'html Deprecated',
        scope: 'invalid.deprecated.entity.other.attribute-name.html',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'Unimplemented',
        scope: 'invalid.unimplemented',
        settings: {
          foreground: color0,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
        scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
        scope:
          'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
        scope:
          'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
        scope:
          'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
        settings: {
          foreground: color1,
        },
      },
      {
        name: '[VSCODE-CUSTOM] JSON Property Name',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: color5,
        },
      },
      {
        name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
        scope: 'support.type.property-name.json punctuation',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'laravel blade tag',
        scope:
          'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'laravel blade @',
        scope:
          'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'use statement for other classes',
        scope:
          'support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'error suppression',
        scope: 'keyword.operator.error-control.php',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'php instanceof',
        scope: 'keyword.operator.type.php',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'style double quoted array index normal begin',
        scope: 'punctuation.section.array.begin.php',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'style double quoted array index normal end',
        scope: 'punctuation.section.array.end.php',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'php illegal.non-null-typehinted',
        scope: 'invalid.illegal.non-null-typehinted.php',
        settings: {
          foreground: colorA,
        },
      },
      {
        name: 'php types',
        scope:
          'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'php call-function',
        scope: 'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'php function-resets',
        scope:
          'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'support php constants',
        scope: 'support.constant.core.rust',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'support php constants',
        scope:
          'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'php goto',
        scope: 'entity.name.goto-label.php,support.other.php',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'php logical/bitwise operator',
        scope:
          'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'php regexp operator',
        scope: 'keyword.operator.regexp.php',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'php comparison',
        scope: 'keyword.operator.comparison.php',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'php heredoc/nowdoc',
        scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'python function decorator @',
        scope: 'meta.function.decorator.python',
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'python function support',
        scope: 'support.token.decorator.python,meta.function.decorator.identifier.python',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'parameter function js/ts',
        scope: 'function.parameter',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'brace function',
        scope: 'function.brace',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'parameter function ruby cs',
        scope: 'function.parameter.ruby, function.parameter.cs',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'constant.language.symbol.ruby',
        scope: 'constant.language.symbol.ruby',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'constant.language.symbol.hashkey.ruby',
        scope: 'constant.language.symbol.hashkey.ruby',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'rgb-value',
        scope: 'rgb-value',
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'rgb value',
        scope: 'inline-color-decoration rgb-value',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'rgb value less',
        scope: 'less rgb-value',
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'sass selector',
        scope: 'selector.sass',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'ts primitive/builtin types',
        scope:
          'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'block scope',
        scope: 'block.scope.end,block.scope.begin',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'cs storage type',
        scope: 'storage.type.cs',
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'cs local variable',
        scope: 'entity.name.variable.local.cs',
        settings: {
          foreground: color5,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: color7,
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: color2,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: colorA,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Import module JS',
        scope: ['keyword.operator.module'],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'js Flowtype',
        scope: ['support.type.type.flowtype'],
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'js Flow',
        scope: ['support.type.primitive'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'js class prop',
        scope: ['meta.property.object'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'js func parameter',
        scope: ['variable.parameter.function.js'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'js template literals begin',
        scope: ['keyword.other.template.begin'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'js template literals end',
        scope: ['keyword.other.template.end'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'js template literals variable braces begin',
        scope: ['keyword.other.substitution.begin'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'js template literals variable braces end',
        scope: ['keyword.other.substitution.end'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'js operator.assignment',
        scope: ['keyword.operator.assignment'],
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'go operator',
        scope: ['keyword.operator.assignment.go'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'go operator',
        scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'Go package name',
        scope: ['entity.name.package.go'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'elm prelude',
        scope: ['support.type.prelude.elm'],
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'elm constant',
        scope: ['support.constant.elm'],
        settings: {
          foreground: color2,
        },
      },
      {
        name: 'template literal',
        scope: ['punctuation.quasi.element'],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'html/pug (jade) escaped characters and entities',
        scope: ['constant.character.entity'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
        scope: [
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.pseudo-class',
        ],
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'Clojure globals',
        scope: ['entity.global.clojure'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Clojure symbols',
        scope: ['meta.symbol.clojure'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Clojure constants',
        scope: ['constant.keyword.clojure'],
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'CoffeeScript Function Argument',
        scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Ini Default Text',
        scope: ['source.ini'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'Makefile prerequisities',
        scope: ['meta.scope.prerequisites.makefile'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Makefile text colour',
        scope: ['source.makefile'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Groovy import names',
        scope: ['storage.modifier.import.groovy'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Groovy Methods',
        scope: ['meta.method.groovy'],
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'Groovy Variables',
        scope: ['meta.definition.variable.name.groovy'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Groovy Inheritance',
        scope: ['meta.definition.class.inherited.classes.groovy'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'HLSL Semantic',
        scope: ['support.variable.semantic.hlsl'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'HLSL Types',
        scope: [
          'support.type.texture.hlsl',
          'support.type.sampler.hlsl',
          'support.type.object.hlsl',
          'support.type.object.rw.hlsl',
          'support.type.fx.hlsl',
          'support.type.object.hlsl',
        ],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'SQL Variables',
        scope: ['text.variable', 'text.bracketed'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'types',
        scope: ['support.type.swift', 'support.type.vb.asp'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'heading 1, keyword',
        scope: ['entity.name.function.xi'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'heading 2, callable',
        scope: ['entity.name.class.xi'],
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'heading 3, property',
        scope: ['constant.character.character-class.regexp.xi'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'heading 4, type, class, interface',
        scope: ['constant.regexp.xi'],
        settings: {
          foreground: color6,
        },
      },
      {
        name: 'heading 5, enums, preprocessor, constant, decorator',
        scope: ['keyword.control.xi'],
        settings: {
          foreground: color1,
        },
      },
      {
        name: 'heading 6, number',
        scope: ['invalid.xi'],
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'string',
        scope: ['beginning.punctuation.definition.quote.markdown.xi'],
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'comments',
        scope: ['beginning.punctuation.definition.list.markdown.xi'],
        settings: {
          foreground: colorC,
        },
      },
      {
        name: 'link',
        scope: ['constant.character.xi'],
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'accent',
        scope: ['accent.xi'],
        settings: {
          foreground: color7,
        },
      },
      {
        name: 'wikiword',
        scope: ['wikiword.xi'],
        settings: {
          foreground: color2,
        },
      },
      {
        name: "language operators like '+', '-' etc",
        scope: ['constant.other.color.rgb-value.xi'],
        settings: {
          foreground: color0,
        },
      },
      {
        name: 'elements to dim',
        scope: ['punctuation.definition.tag.xi'],
        settings: {
          foreground: color8,
        },
      },
      {
        name: 'C++/C#',
        scope: [
          'entity.name.label.cs',
          'entity.name.scope-resolution.function.call',
          'entity.name.scope-resolution.function.definition',
        ],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'Markdown underscore-style headers',
        scope: [
          'entity.name.label.cs',
          'markup.heading.setext.1.markdown',
          'markup.heading.setext.2.markdown',
        ],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'meta.brace.square',
        scope: [' meta.brace.square'],
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: colorC,
          fontStyle: 'italic',
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Quote',
        scope: 'markup.quote.markdown',
        settings: {
          foreground: color8,
        },
      },
      {
        name: 'punctuation.definition.block.sequence.item.yaml',
        scope: 'punctuation.definition.block.sequence.item.yaml',
        settings: {
          foreground: color4,
        },
      },
      {
        scope: ['constant.language.symbol.elixir', 'constant.language.symbol.double-quoted.elixir'],
        settings: {
          foreground: color1,
        },
      },
      {
        scope: ['entity.name.variable.parameter.cs'],
        settings: {
          foreground: color3,
        },
      },
      {
        scope: ['entity.name.variable.field.cs'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Deleted',
        scope: 'markup.deleted',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'Inserted',
        scope: 'markup.inserted',
        settings: {
          foreground: color9,
        },
      },
      {
        name: 'Underline',
        scope: 'markup.underline',
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'punctuation.section.embedded.begin.php',
        scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
        settings: {
          foreground: colorB,
        },
      },
      {
        name: 'support.other.namespace.php',
        scope: ['support.other.namespace.php'],
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'variable.other.object',
        scope: ['variable.other.object'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'variable.other.constant.property',
        scope: ['variable.other.constant.property'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'entity.other.inherited-class',
        scope: ['entity.other.inherited-class'],
        settings: {
          foreground: color3,
        },
      },
      {
        name: 'c variable readwrite',
        scope: 'variable.other.readwrite.c',
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'php scope',
        scope:
          'entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php',
        settings: {
          foreground: color4,
        },
      },
      {
        name: 'Assembly',
        scope: ['constant.numeric.decimal.asm.x86_64'],
        settings: {
          foreground: color6,
        },
      },
      {
        scope: ['support.other.parenthesis.regexp'],
        settings: {
          foreground: color2,
        },
      },
      {
        scope: ['constant.character.escape'],
        settings: {
          foreground: color1,
        },
      },
      {
        scope: ['string.regexp'],
        settings: {
          foreground: color5,
        },
      },
      {
        scope: ['log.info'],
        settings: {
          foreground: color9,
        },
      },
      {
        scope: ['log.warning'],
        settings: {
          foreground: color3,
        },
      },
      {
        scope: ['log.error'],
        settings: {
          foreground: color5,
        },
      },
      {
        name: 'js/ts italic',
        scope:
          'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'comment',
        scope: 'comment.line.double-slash,comment.block.documentation',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'Python Keyword Control',
        scope:
          'keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'markup.italic.markdown',
        scope: 'markup.italic.markdown',
        settings: {
          fontStyle: 'italic',
        },
      },
    ],
    colors: {
      'activityBar.background': '#282c34',
      'activityBar.foreground': '#d7dae0',
      'activityBarBadge.background': '#4d78cc',
      'activityBarBadge.foreground': '#f8fafd',
      'badge.background': '#282c34',
      'button.background': '#404754',
      'button.secondaryBackground': '#30333d',
      'button.secondaryForeground': '#c0bdbd',
      'checkbox.border': '#404754',
      'debugToolBar.background': '#21252b',
      descriptionForeground: color4,
      'diffEditor.insertedTextBackground': '#00809b33',
      'dropdown.background': '#21252b',
      'dropdown.border': '#21252b',
      'editor.background': '#282c34',
      'editor.findMatchBackground': '#42557b',
      'editor.findMatchBorder': '#457dff',
      'editor.findMatchHighlightBackground': '#6199ff2f',
      'editor.foreground': color4,
      'editorBracketHighlight.foreground1': color2,
      'editorBracketHighlight.foreground2': color6,
      'editorBracketHighlight.foreground3': color1,
      'editorHoverWidget.highlightForeground': color7,
      'editorInlayHint.foreground': color4,
      'editorInlayHint.background': '#2c313c',
      'editor.lineHighlightBackground': '#2c313c',
      'editorLineNumber.activeForeground': color4,
      'editorGutter.addedBackground': '#109868',
      'editorGutter.deletedBackground': '#9A353D',
      'editorGutter.modifiedBackground': '#948B60',
      'editorOverviewRuler.addedBackground': '#109868',
      'editorOverviewRuler.deletedBackground': '#9A353D',
      'editorOverviewRuler.modifiedBackground': '#948B60',
      'editor.selectionBackground': '#67769660',
      'editor.selectionHighlightBackground': '#ffffff10',
      'editor.selectionHighlightBorder': '#dddddd',
      'editor.wordHighlightBackground': '#d2e0ff2f',
      'editor.wordHighlightBorder': colorC,
      'editor.wordHighlightStrongBackground': '#abb2bf26',
      'editor.wordHighlightStrongBorder': colorC,
      'editorBracketMatch.background': '#515a6b',
      'editorBracketMatch.border': '#515a6b',
      'editorCursor.background': '#ffffffc9',
      'editorCursor.foreground': '#528bff',
      'editorError.foreground': '#c24038',
      'editorGroup.background': '#181a1f',
      'editorGroup.border': '#181a1f',
      'editorGroupHeader.tabsBackground': '#21252b',
      'editorHoverWidget.background': '#21252b',
      'editorHoverWidget.border': '#181a1f',
      'editorIndentGuide.activeBackground': '#c8c8c859',
      'editorIndentGuide.background': '#3b4048',
      'editorLineNumber.foreground': '#495162',
      'editorMarkerNavigation.background': '#21252b',
      'editorRuler.foreground': '#abb2bf26',
      'editorSuggestWidget.background': '#21252b',
      'editorSuggestWidget.border': '#181a1f',
      'editorSuggestWidget.selectedBackground': '#2c313a',
      'editorWarning.foreground': color2,
      'editorWhitespace.foreground': '#ffffff1d',
      'editorWidget.background': '#21252b',
      focusBorder: '#3e4452',
      'gitDecoration.ignoredResourceForeground': '#636b78',
      'input.background': '#1d1f23',
      'input.foreground': color4,
      'list.activeSelectionBackground': '#2c313a',
      'list.activeSelectionForeground': '#d7dae0',
      'list.focusBackground': '#323842',
      'list.focusForeground': '#f0f0f0',
      'list.highlightForeground': '#ecebeb',
      'list.hoverBackground': '#2c313a',
      'list.hoverForeground': color4,
      'list.inactiveSelectionBackground': '#323842',
      'list.inactiveSelectionForeground': '#d7dae0',
      'list.warningForeground': color2,
      'menu.foreground': color4,
      'menu.separatorBackground': '#343a45',
      'minimapGutter.addedBackground': '#109868',
      'minimapGutter.deletedBackground': '#9A353D',
      'minimapGutter.modifiedBackground': '#948B60',
      'panel.border': '#3e4452',
      'panelSectionHeader.background': '#21252b',
      'peekViewEditor.background': '#1b1d23',
      'peekViewEditor.matchHighlightBackground': '#29244b',
      'peekViewResult.background': '#22262b',
      'scrollbar.shadow': '#23252c',
      'scrollbarSlider.activeBackground': '#747d9180',
      'scrollbarSlider.background': '#4e566660',
      'scrollbarSlider.hoverBackground': '#5a637580',
      'settings.focusedRowBackground': '#282c34',
      'settings.headerForeground': '#fff',
      'sideBar.background': '#21252b',
      'sideBar.foreground': color4,
      'sideBarSectionHeader.background': '#282c34',
      'sideBarSectionHeader.foreground': color4,
      'statusBar.background': '#21252b',
      'statusBar.debuggingBackground': '#cc6633',
      'statusBar.debuggingBorder': '#ff000000',
      'statusBar.debuggingForeground': color0,
      'statusBar.foreground': '#9da5b4',
      'statusBar.noFolderBackground': '#21252b',
      'statusBarItem.remoteBackground': '#4d78cc',
      'statusBarItem.remoteForeground': '#f8fafd',
      'tab.activeBackground': '#282c34',
      'tab.activeBorder': '#b4b4b4',
      'tab.activeForeground': '#dcdcdc',
      'tab.border': '#181a1f',
      'tab.hoverBackground': '#323842',
      'tab.inactiveBackground': '#21252b',
      'tab.unfocusedHoverBackground': '#323842',
      'terminal.ansiBlack': '#3f4451',
      'terminal.ansiBlue': '#4aa5f0',
      'terminal.ansiBrightBlack': '#4f5666',
      'terminal.ansiBrightBlue': '#4dc4ff',
      'terminal.ansiBrightCyan': '#4cd1e0',
      'terminal.ansiBrightGreen': '#a5e075',
      'terminal.ansiBrightMagenta': '#de73ff',
      'terminal.ansiBrightRed': '#ff616e',
      'terminal.ansiBrightWhite': '#e6e6e6',
      'terminal.ansiBrightYellow': '#f0a45d',
      'terminal.ansiCyan': '#42b3c2',
      'terminal.ansiGreen': '#8cc265',
      'terminal.ansiMagenta': '#c162de',
      'terminal.ansiRed': '#e05561',
      'terminal.ansiWhite': '#d7dae0',
      'terminal.ansiYellow': '#d18f52',
      'terminal.background': '#282c34',
      'terminal.border': '#3e4452',
      'terminal.foreground': color4,
      'terminal.selectionBackground': '#abb2bf30',
      'textBlockQuote.background': '#2e3440',
      'textBlockQuote.border': '#4b5362',
      'textLink.foreground': color7,
      'textPreformat.foreground': color2,
      'titleBar.activeBackground': '#282c34',
      'titleBar.activeForeground': '#9da5b4',
      'titleBar.inactiveBackground': '#21252b',
      'titleBar.inactiveForeground': '#6b717d',
      'tree.indentGuidesStroke': '#ffffff1d',
      'walkThrough.embeddedEditorBackground': '#2e3440',
      'welcomePage.buttonHoverBackground': '#404754',
    },
  };
};
