import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth-guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Public } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorador';
import { Role } from '../../auth/models/roles.model';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomersService) {}

  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Public()
  @Get(':id')
  get(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(id, payload);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
