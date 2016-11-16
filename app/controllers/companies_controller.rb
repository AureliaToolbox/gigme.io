class CompaniesController < ApplicationController
  respond_to :json

  def index
    @companies = Company.all
    respond_to do |format|
      format.html
      format.json { render json: @companies }
    end
  end

  def new
    @company = Company.new
    respond_to do |format|
      format.html
      format.json { render json: @company }
    end
  end

  def edit
  end

  def create
    @company = Company.new(company_params)
    return false if cannot_save_or_update
    @company.save
    respond_to do |format|
      format.html { redirect_to(@company) }
      format.json { render json: @company }
    end
  end

  def update
    return false if cannot_save_or_update
    @company.update(company_params)
    respond_to do |format|
      format.html { redirect_to(@company) }
      format.json { render json: @company }
    end
  end

  private
    def cannot_save_or_update
      return false if !current_user.is_admin || !@company.id || @company.id != current_user.company_id
    end

    def set_company
      @company = Company.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:name, :website, :main_contact_id)
    end
end
