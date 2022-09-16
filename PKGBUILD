# Maintainer: Lucas Melo <luluco250 at gmail dot com>

pkgname=sonic3air-bin
pkgver=v22.09.10.0
pkgrel=1
pkgdesc='A fan-made widescreen remaster of Sonic 3 & Knuckles.'
arch=('x86_64')
url='https://sonic3air.org/'
license=('custom:CC BY-NC-SA 4.0')
depends=('opengl-driver' 'sdl2')
optdepends=('discord: Discord rich presence support')
provides=(sonic3air)

# Unfortunately Google seems to have started taking measures to crack down even
# harder on automatic downloads, with URLs changing and limiting how many
# users can even download the file in an arbitrary period of time.
# So we'll just have to rely on the slower server from sonic3air.org.
# Or you could just download it from Google Drive yourself, if the sha256 check
# passes it should work just fine.

### Old Google Drive download method, left here as reference. ###

# Downloading from Google Drive like this guide:
# https://gist.github.com/tanaikech/f0f2d122e05bf5f971611258c22c110f

# _fileId='1RECLmg_kziM0EuHgMc7f3rS_5uaU2N0k'
# _cookie="./google_drive.cookie"
# _srcCurl=`curl \
# 	-c ${_cookie} \
# 	-s \
# 	-L "https://drive.google.com/u/0/uc?export=download&id=${_fileId}" \
# 	> /dev/null && \
# 	echo "https://drive.google.com/u/0/uc?export=download&confirm=$(awk '/download/ { print $NF }' ${_cookie})&id=${_fileId}"`

# DLAGENTS=("https::/usr/bin/curl -Lb ${_cookie} %u -o %o")

source=(
	# "sonic3air_${pkgver}.tar.gz::${_srcCurl}"
	"sonic3air_${pkgver}.tar.gz::https://sonic3air.org/download/downloadgame_linux2.php"
	'sonic3air.desktop'
	'sonic3air.sh'
	'LICENSE.md'
)

sha256sums=(
	'2c052dbd4e823a9700ac700f0fcf3deca943effd06004c52363844b5b0409634'
	'7c5568d01131935c189b3060ea0319cc0047c8a76c9152bf5d461e70f676eebd'
	'0ac3f4ea42157e6956f85e1e68e7bd456104fd264d10dd2be43e4c38421b3426'
	'4bff643c05c2396b7e2987721c2f77cd3921434a0a2511f4a3bf31fc53fd7d76'
)

package() {
	install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/sonic3air/LICENSE.md"
	install -Dm644 sonic3air.desktop "$pkgdir/usr/share/applications/sonic3air.desktop"
	install -Dm755 sonic3air.sh "$pkgdir/usr/bin/sonic3air"
	cd "$srcdir/sonic3air_game/"
	rm "setup_linux.sh"
	find . -type f -exec install -D {} "$pkgdir/opt/sonic3air/{}" \;
}
