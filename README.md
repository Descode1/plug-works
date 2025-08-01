# Plug Works

Plug Works is a lightweight React component library built with TypeScript and styled-components.

## 📦 Installation

```bash
npm install plug-works
```

## 🛠️ Usage

###  Button

```tsx
import { Button } from 'plug-works';

const Example = () => (
  <Button variant="primary" action={() => alert('Clicked!')}>
    Click Me
  </Button>
);
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"outlined"` | Visual style |
| `disabled` | `boolean` | Disable the button |
| `action` | `() => void` | Callback on click |
| `children` | `React.ReactNode` | Button content |

###  Dropdown

```tsx
import { Dropdown } from 'plug-works';

const options = [
  { label: 'Profile', value: 'profile', action: () => console.log('Profile') },
  { label: 'Logout', value: 'logout', action: () => console.log('Logout') }
];

const Example = () => (
  <Dropdown options={options}>
    <span>Menu</span>
  </Dropdown>
);
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `options` | `DropdownOption[]` | Items with label, value, action |
| `variant` | `"light"` \| `"dark"` | Theme variant |
| `children` | `React.ReactNode` | Trigger element |

###  Dialog

```tsx
import { Dialog } from 'plug-works';

const Example = () => (
  <Dialog title="Confirm Delete">
    <p>Are you sure you want to delete this item?</p>
  </Dialog>
);
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Title of the dialog |
| `variant` | `"light"` \| `"dark"` | Theme variant |
| `children` | `React.ReactNode` | Dialog content |

###  Tabs

```tsx
import { Tabs, Tab } from 'plug-works';

const Example = () => (
  <Tabs variant="light" defaultActiveTab={0}>
    <Tab title="First Tab">
      <p>Content for the first tab</p>
    </Tab>
    <Tab title="Second Tab">
      <p>Content for the second tab</p>
    </Tab>
  </Tabs>
);
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `variant` | `"light"` \| `"dark"` | Theme variant |
| `defaultActiveTab` | `number` | Index of initially active tab |
| `children` | `ReactNode` | Tab components |

#### Tab Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Tab header title |
| `children` | `ReactNode` | Tab content |

###  Input

```tsx
import { Input } from 'plug-works';

const Example = () => (
  <Input
    variant="primary"
    placeholder="Enter your text"
    type="text"
    onChange={(e) => console.log(e.target.value)}
  />
);
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `variant` | `"primary"` \| `"secondary"` | Visual style |
| `disabled` | `boolean` | Disable the input |
| `placeholder` | `string` | Placeholder text |
| `value` | `string` | Input value |
| `type` | `string` | Input type (text, email, etc.) |
| `onChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Change event handler |

###  Accordion

```tsx
import { Accordion } from 'plug-works';

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: <div>Custom JSX content</div> }
];

const Example = () => (
  <Accordion items={items} allowMultipleOpen={true} />
);
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `items` | `AccordionData[]` | Array of accordion items |
| `allowMultipleOpen` | `boolean` | Allow multiple sections to be open |

#### AccordionData Interface

| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Section title |
| `content` | `string \| React.ReactNode` | Section content |