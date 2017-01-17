# $Id$
# Maintainer: Ross Whitfield <whitfieldre@ornl.gov>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Stéphane Gaudreault <stephane@archlinux.org>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Angel 'angvp' Velasquez <angvp[at]archlinux.com.ve>
# Contributor: Douglas Soares de Andrade <dsa@aur.archlinux.org>

pkgbase=python-matplotlib2
pkgname=('python2-matplotlib2' 'python-matplotlib2')
pkgver=2.0.0
pkgrel=1
pkgdesc="A python plotting library, making publication quality plots"
arch=('i686' 'x86_64')
url='http://matplotlib.org'
license=('custom')
checkdepends=('python-nose' 'python2-nose' 'python-mock' 'python2-mock' 'xorg-server-xvfb'
              'texlive-core' 'texlive-latexextra' 'imagemagick' 'ffmpeg' 'mencoder' 'inkscape'
              'python-pycodestyle' 'python2-pycodestyle' 'python-pandas' 'python2-pandas')
makedepends=('python2-pytz' 'python2-numpy' 'python2-pyqt4' 'python-pytz' 'python-numpy'
             'python-pyqt4' 'tk' 'python-cairocffi' 'python2-cairocffi' 'python-dateutil'
             'python2-dateutil' 'python-gobject' 'python2-gobject' 'python-pyparsing'
             'python2-pyparsing' 'pygtk' 'python-six' 'ghostscript' 'texlive-bin'
             'python-tornado' 'python2-tornado' 'gtk3' 'wxpython' 'python-pyqt5' 'python2-pyqt5'
             'libxkbcommon-x11' 'python-pillow' 'python2-pillow' 'python-setuptools'
             'python2-setuptools' 'python-cycler' 'python2-cycler')
source=("$pkgbase-$pkgver.tar.gz::https://github.com/matplotlib/matplotlib/archive/v$pkgver.tar.gz"
        setup.cfg)
sha512sums=('b0e6d91aee5f91e0155c9e6716eef1a7e1fb907daeb93d603709142b749878fd758e42fe3707ac73c3d87959c6a35126c9e17c08ef78c5734106fafdf198f304'
            '493a08914755d7d27d98025fc309f19cc3ec45e777fc81a56fa50430f90c0b39c2f66c2a01f6fd14a2e351005151365a25d2ab71ae2e80a54c6f57ceeacea35b')

prepare() {
   cp -a "$srcdir"/matplotlib-${pkgver}{,-py2}

   cd "$srcdir"/matplotlib-${pkgver}
   for file in $(find . -name '*.py' -print); do
      sed -i -e "s|^#!.*/usr/bin/python|#!/usr/bin/python3|" \
             -e "s|^#!.*/usr/bin/env *python|#!/usr/bin/env python3|" ${file}
   done

   cd "$srcdir"/matplotlib-${pkgver}-py2
   for file in $(find . -name '*.py' -print); do
      sed -i -e "s|^#!.*/usr/bin/python|#!/usr/bin/python2|" \
             -e "s|^#!.*/usr/bin/env *python|#!/usr/bin/env python2|" ${file}
   done

   cp -a "$srcdir"/matplotlib-${pkgver}{,-test}
   cp -a "$srcdir"/matplotlib-${pkgver}-py2{,-test}

   # Remove tests (FS#48175)
   cp "$srcdir/setup.cfg" "$srcdir"/matplotlib-$pkgver/
   cp "$srcdir/setup.cfg" "$srcdir"/matplotlib-$pkgver-py2/
}

build() {
   # this seems to need to be present or gtk/gdk dies
   # and hangs the build checking if gtk3cairo is installed
   export XDG_RUNTIME_DIR=/tmp

   cd "$srcdir"/matplotlib-${pkgver}
   python3 setup.py build

   cd "$srcdir"/matplotlib-${pkgver}-py2
   python2 setup.py build
}

check() {
   cd "$srcdir"/matplotlib-${pkgver}-test
   python3 setup.py build

   cd "$srcdir"/matplotlib-${pkgver}-py2-test
   python2 setup.py build

   cd "$srcdir"/matplotlib-${pkgver}-test
   (
     export PYTHONPATH="$PWD/build/lib.linux-$CARCH-3.6:$PYTHONPATH"
     python -c "from matplotlib import font_manager"
     rm -rf ../tmp_test_dir && mkdir ../tmp_test_dir && cd ../tmp_test_dir
     xvfb-run -a -s "+extension GLX +extension RANDR +render -screen 0 1280x1024x24" \
       python ../matplotlib-${pkgver}/tests.py -sv --processes=8 --process-timeout=300 || warning "Tests failed"
   )

   cd "$srcdir"/matplotlib-${pkgver}-py2-test
   (
     export PYTHONPATH="$PWD/build/lib.linux-$CARCH-2.7:$PYTHONPATH"
     python2 -c "from matplotlib import font_manager"
     rm -rf ../tmp_test_dir && mkdir ../tmp_test_dir && cd ../tmp_test_dir
     xvfb-run -a -s "+extension GLX +extension RANDR +render -screen 0 1280x1024x24" \
       python2 ../matplotlib-${pkgver}-py2/tests.py -sv --processes=8 --process-timeout=300 || warning "Tests failed"
   )
}

package_python2-matplotlib2() {
   depends=('python2-pytz' 'python2-numpy' 'python2-pyqt5' 'python2-dateutil' 'python2-pyparsing' 'python2-cycler' 'libxkbcommon-x11')
   optdepends=('pygtk: for GTK/GTKAgg/GTKCairo backend'
               'python2-cairo: for GTKCairo/GTK3Cairo backend'
               'python2-cairocffi: for GTKCairo/GTK3Cairo backend (alternative to python2-cairo)'
               'python2-pyqt4: for Qt4Agg backend'
               'tk: used by the TkAgg backend'
               'ghostscript: usetex dependencies'
               'texlive-bin: usetex dependencies'
               'python2-tornado: for webagg backend'
               'python2-gobject: for GTK3Agg/GTK3Cairo backend'
               'wxpython: for WX/WXAgg backend'
               'python2-pillow: for reading/saving .jpg/bmp/tiff files')
   provides=('python2-matplotlib')
   conflicts=('python2-matplotlib')

   cd matplotlib-${pkgver}-py2
   python2 setup.py install -O1 --skip-build --root "${pkgdir}" --prefix=/usr

   install -dm755 "${pkgdir}"/usr/share/licenses/python2-matplotlib
   install -m 644 doc/users/license.rst "${pkgdir}"/usr/share/licenses/python2-matplotlib
}

package_python-matplotlib2() {
   depends=('python-pytz' 'python-numpy' 'python-pyqt5' 'python-dateutil' 'python-pyparsing' 'python-cycler' 'libxkbcommon-x11')
   optdepends=('python-gobject: for GTK3Agg/GTK3Cairo backend'
               'python-cairocffi: for GTK3Agg/GTK3Cairo backend'
               'python-pyqt4: for Qt4Agg backend'
               'tk: used by the TkAgg backend'
               'ghostscript: usetex dependencies'
               'texlive-bin: usetex dependencies'
               'python-tornado: for webagg backend'
               'python-pillow: for reading/saving .jpg/bmp/tiff files')
   provides=('python-matplotlib')
   conflicts=('python-matplotlib')

   cd matplotlib-${pkgver}
   python3 setup.py install -O1 --skip-build --root "${pkgdir}" --prefix=/usr

   install -dm755 "${pkgdir}"/usr/share/licenses/python-matplotlib
   install -m 644 doc/users/license.rst "${pkgdir}"/usr/share/licenses/python-matplotlib
}
