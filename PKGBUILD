# Maintainer: HRKings <hrkings@***.com>
pkgname=pokemonsay-newgenerations-git
_pkgname=pokemonsay-newgenerations
pkgver=1.0.4
pkgrel=1
pkgdesc="Brings pokemon to the terminal using the power of cowsay."
arch=(any)
url="https://github.com/HRKings/pokemonsay-newgenerations.git"
license=('unknown')
depends=(cowsay)
provides=(pokemonsay)
source=("git+${url}")
md5sums=('SKIP')

package() {
	cd ${_pkgname}
	# Copy pokemon cowfiles
	rm -rf "/opt/${_pkgname}/pokemons"
	mkdir -p "/opt/${_pkgname}/pokemons"
  	cp ./pokemons/* "/opt/${_pkgname}/pokemons/"

	# Install the README
	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"

	# Put the installation path on the script
	sed -r "31s;.*;INSTALL_PATH=/opt/${_pkgname};" -i pokemonsay.sh

	#
	sed -r "7s;.*;pokemonsay --think $@;" -i pokemonsay.sh

	# Install the scripts	
  	install -Dm755 pokemonsay.sh "${pkgdir}"/usr/bin/pokemonsay
  	install -Dm755 pokemonthink.sh "${pkgdir}"/usr/bin/pokemonthink
}