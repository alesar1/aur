# PKGBUILD generated by pipman
# Python package author: Jos Polfliet <jos.polfliet+panpro@gmail.com>
pkgname=python-pandas-profiling
pkgver=1.4.1
pkgrel=1
pkgdesc="Generate profile report for pandas DataFrame"
arch=(any)
url="http://github.com/jospolfliet/pandas-profiling"
license=(MIT)
makedepends=("python" "python-pip")
build() {
  pip install --no-deps --target="pandas-profiling" pandas-profiling==1.4.1
}
package() {
  sitepackages=$(python -c "import site; print(site.getsitepackages()[0])")
  mkdir -p $pkgdir/"$sitepackages"
  cp -r $srcdir/pandas-profiling/* $pkgdir/"$sitepackages"
}