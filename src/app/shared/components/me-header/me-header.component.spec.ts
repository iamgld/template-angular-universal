// Angular Imports
import { ComponentFixture, TestBed } from '@angular/core/testing'
// This Component Imports
import { MeHeaderComponent } from './me-header.component'

describe('MeHeaderComponent', () => {
	let component: MeHeaderComponent
	let fixture: ComponentFixture<MeHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MeHeaderComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(MeHeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
