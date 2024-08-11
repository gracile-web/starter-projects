/// <reference types="@gracile/gracile/ambient" />
/// <reference types="@gracile/svg/ambient" />
/// <reference types="@gracile/markdown/ambient" />

declare namespace Gracile {
	interface Locals {
		requestId: import('node:crypto').UUID;
	}
}
