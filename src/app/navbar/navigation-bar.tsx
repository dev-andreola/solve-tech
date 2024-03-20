"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Logo from "./logo";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Agendamento de Reuniões",
    href: "",
    description:
      "Um software que permite aos usuários agendar facilmente reuniões ou atendimentos, sincronizando calendários e enviando lembretes automáticos.",
  },
  {
    title: "Gestão de Tarefas",
    href: "/",
    description:
      "Um aplicativo para organizar e priorizar tarefas, atribuir responsáveis e acompanhar o progresso em tempo real.",
  },
  {
    title: "Controle de Despesas",
    href: "/",
    description:
      "Um software para registrar e categorizar despesas, gerar relatórios automáticos e facilitar o reembolso de funcionários.",
  },
  {
    title: "Monitoramento de Saúde",
    href: "/",
    description:
      "Um software para acompanhar métricas de saúde, como atividade física, dieta e padrões de sono, e fornecer recomendações personalizadas para melhorar o bem-estar.",
  },
  {
    title: "Atendimento ao Cliente",
    href: "/",
    description:
      "Um software de suporte ao cliente que centraliza solicitações, automatiza respostas e fornece métricas para melhorar a eficiência do atendimento.",
  },
  {
    title: "Rastreamento de Entregas",
    href: "/",
    description:
      "Um aplicativo que permite rastrear encomendas em tempo real, fornecendo atualizações de status e estimativas de entrega aos clientes.",
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden sm:flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger>SolveTech</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      SolveTech
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Transformando suas necessidades em soluções tecnológicas
                      eficientes.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Introdução">
                Entenda como funcionam nossos serviços
              </ListItem>
              <ListItem href="/" title="Demonstração">
                Veja na prática como são os projetos
              </ListItem>
              <ListItem href="/" title="Suporte">
                Esclareça dúvidas comuns sobre os serviços e produtos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Soluções</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="px-4 py-2 font-medium">
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
