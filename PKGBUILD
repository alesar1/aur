# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=konsole-colorscheme-sweet
pkgver=20190817
pkgrel=1
pkgdesc="Color scheme to fit the Sweet KDE plasma theme"
arch=('any')
url="https://store.kde.org/p/1297008/"
license=('GPL3')
depends=('konsole')
source=("https://dllb2.pling.com/api/files/download/j/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1NjYwNzE5MjgiLCJvIjoiMSIsInMiOiI2MDQ1MWEzMmU4ZDkzMjgzNmMzNDcxMTdjMTY1NmQzNWM3NDY3MTI1ZjM0NWY5NWU4MmM0OWUxZmY1M2QzNWI5NzQ5YzI2NzFiZGE4MzJhNmYyYWMxOWYyOGJjN2FmODE4MTBlOWY3YmM0NWUyNzk1Njg0MjdiZGMwYjM0Mzc3ZCIsInQiOjE1OTI0MjA2MjgsInN0ZnAiOm51bGwsInN0aXAiOiI5My4yNTIuMC40NSJ9.jIJr-c9CijsWkB51DSpl6IbBBZay2JJ3fdwG66APNu0/Sweet.tar.xz")
md5sums=('5a4e7920200ec7b2fbec3c2e1b239826')

package() {
  cd "${srcdir}"

  install -Dm644 -t "${pkgdir}/usr/share/konsole" \
    Sweet.colorscheme Sweet-Mars.colorscheme
}
