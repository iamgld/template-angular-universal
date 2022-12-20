// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// Shared Imports
import { MaterialModule } from '@shared/modules'
// This Module Imports
import { MeHeaderComponent } from '@shared/components'

const components = [MeHeaderComponent]

@NgModule({
	declarations: [...components],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule],
	exports: [...components],
})
export class ComponentsModule {}
