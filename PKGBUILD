pkgname="md-git"
pkgver=1.12
pkgrel=1
pkgdesc="Simple MarkDown Reader"

arch=("any")

makedepends=("git" "binutils" "make" "gcc" "gzip")
depends=("glibc")

license=("MIT")

url="https://github.com/Noah-Arcouette/md.git"

provides=("md")
conflicts=("md")

giturl="https://raw.githubusercontent.com/Noah-Arcouette/md/master/"

source=(
	"git+${url}"
)

sha256sums=(
	"SKIP"
)


pkgver () {
	cd "md"
	printf "${pkgver}.r%s%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build () {
	cd "md"

	make mk
	make build
}

package() {
	cd "md"

	# setup dirs
	mkdir -p "${pkgdir}/usr/bin/"
	mkdir -p "${pkgdir}/usr/doc/md/"

	# make binary root owned and executable
	chown root:root ${srcdir}/md/bin/md
	chmod a+x ${srcdir}/md/bin/md

	# copy docs
	cp ${srcdir}/md/doc/* ${pkgdir}/usr/doc/md/
	cp "${srcdir}/md/face" "${pkgdir}/usr/doc/md/face"
	cp "${srcdir}/md/md.1.gz" "${pkgdir}/usr/share/man/man1/"

	# copy binary
	mv "${srcdir}/md/bin/md" "${pkgdir}/usr/bin"
}
