# Maintainer: Anna <morganamilo@gmail.com>
# Co-Maintainer: E5ten <e5ten.arch@gmail.com>
# Co-Maintainer: Pezz <aur [at] sanxion [dot] net>
# Contributor: Cayde Dixon <me@cazzar.net>
# Contributor: Anthony Anderson <aantony4122@gmail.com>

pkgname='discord-ptb'
pkgver=0.0.12
pkgrel=1
pkgdesc="All-in-one voice and text chat for gamers that's free and secure."
arch=('x86_64')
url='https://discordapp.com/'
provides=('discord')
license=('custom')
depends=('gtk2' 'gconf' 'libnotify' 'libxss' 'glibc' 'alsa-lib' 'nspr' 'nss' 'libc++')
optdepends=(
  'libpulse: For pulseaudio support'
  'noto-fonts-emoji: Google font for emoji support.'
  'ttf-symbola: Font for emoji support.'
  'noto-fonts-cjk: Font for special characters such as /shrug face.'
)

install="DiscordPTB.install"
source=(LICENSE
		"https://dl-ptb.discordapp.net/apps/linux/${pkgver}/${pkgname}-${pkgver}.tar.gz")

md5sums=('26b3229c74488c64d94798e48bc49fcd'
         'b3aa27ac648afb4e43885714b38e4b4a')

#This is always latest build, right now I do not know of a version param.

package() {
  # Install the main files.
  install -d "${pkgdir}/opt/${pkgname}"
  cp -a "${srcdir}/DiscordPTB/." "${pkgdir}/opt/${pkgname}"

  # Exec bit
  chmod 755 "${pkgdir}/opt/${pkgname}/DiscordPTB"

  # Desktop Entry
  install -d "${pkgdir}/usr/share/applications"
  install "${pkgdir}/opt/${pkgname}/${pkgname}.desktop" "${pkgdir}/usr/share/applications"
  sed -i s%/usr/share%/opt% ${pkgdir}/usr/share/applications/${pkgname}.desktop``

  # Main binary
  #install "${srcdir}/Discord.sh" "${pkgdir}/usr/bin/discord"
  mkdir -p ${pkgdir}/usr/bin
  ln -s "/opt/${pkgname}/DiscordPTB" "${pkgdir}/usr/bin/${pkgname}"

  # Create symbolic link to the icon
  install -d "${pkgdir}/usr/share/pixmaps"
  ln -s "/opt/${pkgname}/discord.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

  # License
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
