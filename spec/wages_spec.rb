require 'wages.rb'

RSpec.describe Wages do
  
  context "it returns a yearly salary" do
    it "is given a total yearly salary" do
      my_take_home = Wages.new(10000, 20, 11)
      result = my_take_home.yearly
      expect(my_take_home.yearly).to eq 10000
    end
  end

  context ' given a yearly salary it divides this salary into monthly amounts' do
    it 'divides the yearly salary into gross amount per month' do
      my_take_home = Wages.new(10000, 20, 11)
      result = my_take_home.monthly
      expect(my_take_home.monthly).to eq 833
    end
  end

  context ' given a tax percentage it applies this to the monthly take home pay' do
    it 'returns a net salary based on the tax percentage' do
      my_take_home = Wages.new(10000, 20, 11)
      result = my_take_home.net
      expect(my_take_home.net).to eq 666.4
    end
  end
end