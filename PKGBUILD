# Maintainer: Maziar Saleh Ziabari <helasraizam@gmail.com>
# Contributor: Philipp A. <flying-sheep@web.de>
pkgname=jupyter_contrib_nbextensions
pkgver=0.5.1
pkgrel=1
pkgdesc='A collection of Jupyter nbextensions'
arch=(any)
url="https://github.com/ipython-contrib/$pkgname"
license=(BSD)
replaces=(jupyter-nbextensions-git jupyter-nbextensions)
conflicts=(jupyter-nbextensions python-jupyter-nbextensions)
depends=(
	python
	python-lxml
	python-yaml
	python-psutil
	jupyter-notebook
	jupyter-nbconvert
	'jupyter_contrib_core>=0.3.3'
	'jupyter_nbextensions_configurator>=0.4.0'
	'jupyter_highlight_selected_word>=0.1.0'
	'jupyter_latex_envs>=1.4.0'
)
makedepends=(python-pip mariadb jq)
_wheel="$pkgname-$pkgver-py2.py3-none-any.whl"
source=("$_wheel::https://files.pythonhosted.org/packages/py2.py3/${pkgname::1}/$pkgname/$_wheel" "$pkgname.install")
sha256sums=('2c071f0aa208c569666f656bdc0f66906ca493cf9f06f46db6350db11030ff40'
            'd141d36609422748b0b22b6c432f223bfc92d72359bbccaf709690f7de313e35')
noextract=("$_wheel")
install="$pkgname.install"

package() {
	local _python3="$(readlink /usr/bin/python3)"
	local _site_packages="$pkgdir/usr/lib/$_python3/site-packages"
	
	msg2 'installing python package'
	pip install --compile --no-deps --ignore-installed --root="$pkgdir" "$_wheel"
	
	msg2 'installing extensions'
	#--user uses JUPYTER_CONFIG_DIR
	env \
		PATH="$pkgdir/usr/bin:$PATH" \
		PYTHONPATH="$_site_packages:$PYTHONPATH" \
		JUPYTER_DATA_DIR="$pkgdir/usr/share/jupyter" \
		JUPYTER_CONFIG_DIR="$pkgdir/etc/jupyter" \
		jupyter contrib nbextension install --user
	
	#--fixed-strings --recursive --files-with-matches
	for file in $(grep -Frl "$pkgdir" "$pkgdir/etc"); do
		replace "$pkgdir/" '' -- $file
	done
	
	rm "$pkgdir/etc/jupyter/jupyter_notebook_config.json"
}
