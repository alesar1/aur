# Maintainer: Philip Abernethy <chais.z3r0@gmail.com>

pkgname=tshock
pkgver=4.3.9
# Because of tag 4.2200 is 4.2.2.1228 and tag 4.2202 is 4.2.2.0224 epoch must be 1
epoch=1
pkgrel=1
pkgdesc="A Terraria Server administration modification that runs on the open source TerrariaAPI."
arch=(any)
url="http://tshock.co/xf/"
license=("GPL")
depends=('tmux'
         'mono')
source=("https://github.com/NyxStudios/TShock/releases/download/v${pkgver}/${pkgname}_${pkgver}.zip"
        'tshock.sh'
        'tshock@.service')

sha512sums=('bf211d82ef68bc3a575e4bbf11cd537b7b06b3ebf47a0c867db541dd29fb3327c718547a12cd2cb8c18ed0d626522735338b871719fe1f1b80464bbccc56a386'
            'e73ca357516700bbd4ec5e6529320984b81fc7c6abc882181a9a9b3aad32f0d655b7686470fdbf7a953ce1935a79dbed983397aff0bf7ff26a1611dbcca391fb'
            '563ada981c2e08293462485fd85b2c4e0b190c55ed3bcea4139b955f931d970d97c2bd89fba5b190231e9f2adeddd2c385abd11781bf1a98b13b78b8951bf623')

install=tshock.install

backup=('srv/tshock/tshock/config.json')

package() {
	install -d "${pkgdir}/srv/tshock/ServerPlugins/"
	install -d "${pkgdir}/etc/conf.d/tshock/"
	echo "BASEDIR=/srv/tshock
PORT=7777
WORLDDIR=Terraria/Worlds
WORLD=World1
SIZE=2" > "${pkgdir}/etc/conf.d/tshock/default.conf"

	install -Dm755 "${srcdir}/tshock.sh" "${pkgdir}/srv/tshock/"
	install -Dm644 "${srcdir}/tshock@.service" "${pkgdir}/usr/lib/systemd/system/tshock@.service"

	install -Dm644 "${srcdir}/ServerPlugins"/* "${pkgdir}/srv/tshock/ServerPlugins/"
	install -Dm644 "${srcdir}/sqlite3.dll" "${pkgdir}/srv/tshock/"
	install -Dm644 "${srcdir}/Newtonsoft.Json.dll" "${pkgdir}/srv/tshock/"
	install -Dm644 "${srcdir}/TerrariaServer.exe" "${pkgdir}/srv/tshock/"
}
