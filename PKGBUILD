# Maintainer: Deepjyoti <deep.barman30@gmail.com>
pkgname=ytmdl
pkgver=2021.5.26
pkgrel=1
pkgdesc="Download songs from YouTube with metadata from sources like Itunes, Gaana, Deezer etc."
arch=("any")
url="https://github.com/deepjyoti30/ytmdl"
license=('MIT')
depends=(
		"python>=3.6"
		"ffmpeg"
		"youtube-dl"
		"python-mutagen"
		"python-beautifulsoup4"
		"python-colorama"
		"downloader-cli"
		"python-itunespy"
		"python-ffmpeg"
		"python-pysocks"
		"python-xdg"
		"python-requests"
		"python-lxml"
		"python-wheel"
		"python-youtube-search-git"
		"python-unidecode"
		"python-simber"
		"python-pydes"
		"python-urllib3"
		"python-rich"
		"python-musicbrainzngs"
		)
makedepends=("git" "python-setuptools")
optdepends=("tensorflow: Trim Support")
provides=("${pkgname}")
conflicts=("${pkgname}-git")
replaces=()
backup=()
options=()
install=
changelog=
source=("https://files.pythonhosted.org/packages/9b/da/f2f3fc7a395f744550c711dc3af15fef8e00d8edce79c4a04e645a4bb83f/ytmdl-2021.5.26.post1.tar.gz")
noextract=()
md5sums=("SKIP")
validpgpkeys=()

prepare() {
	cd "${pkgname}-${pkgver}.post${pkgrel}"
  	sed -i 's|etc/bash_completion.d|share/bash-completion/completions|' setup.py
}

build() {
	cd "${pkgname}-${pkgver}.post${pkgrel}"
	python setup.py build
}

package() {
	cd "${pkgname}-${pkgver}.post${pkgrel}"
	python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 "${pkgdir}/share/bash-completion/completions/ytmdl.bash" \
	   	"${pkgdir}/usr/share/bash-completion/completions/ytmdl"
	install -Dm644 "${pkgdir}/usr/share/zsh/functions/Completion/Unix/ytmdl.zsh" \
		"${pkgdir}/usr/share/zsh/site-functions/_ytmdl"
}
