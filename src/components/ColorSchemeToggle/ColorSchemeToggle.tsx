import { Button, Group } from '@mantine/core';

export function ColorSchemeToggle() {
  return (
    <Group justify="center" mt="xl">
      <Button variant="filled" color="blue">Light</Button>
      <Button variant="default" color="red">Dark</Button>
      <Button variant="outline" >Auto</Button>
      <Button variant="gradient" >Auto</Button>
      <Button variant="light" >Auto</Button>
      <Button variant="subtle" >Auto</Button>
      <Button variant="transparent" >Auto</Button>
      <Button variant="white" >Auto</Button>
    </Group>
  );
}
