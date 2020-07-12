# Maintainer: Felix Golatofski <contact@xdfr.xdfr.de>
# Contributor: ferreirarocha <marcos.fr.rocha at gmail dot com>

_pkgnamefmt=LibreOfficeDev
_pkgname=libreoffice
pkgname=${_pkgname}-dev-beta-bin
_LOver=7.0.0.0.beta2
pkgver=7.0.0.0
_basever=$( cut -f1-2 -d'.' <<< ${_LOver} )
pkgrel=2
arch=('x86_64')
license=('LGPL3')
url="https://www.libreoffice.org/"
pkgdesc="LibreOffice development branch"
depends=('curl>=7.20.0' 'hunspell>=1.2.8' 'python>=3.5' 'libwpd>=0.9.2' 'libwps'
         'neon>=0.28.6' 'pango' 'nspr' 'libjpeg' 'libxrandr' 'libgl' 'dbus-glib'
         'libxslt' 'redland' 'hyphen' 'lpsolve' 'gcc-libs' 'sh' 'graphite' #'icu'
		 'lcms2' 'poppler>=0.24.0' 'libvisio' 'libetonyek' 'libodfgen' 'libcdr'
		 'libmspub' 'harfbuzz-icu' 'glew' 'nss' 'clucene' 'hicolor-icon-theme'
		 'desktop-file-utils' 'shared-mime-info' 'glu' 'libpagemaker'
		 'libxinerama' 'libabw' 'libmwaw' 'libe-book' 'libcups' 'gtk2'
		 'liborcus' 'liblangtag' 'libexttextcat' 'libcmis')
optdepends=('java-runtime:          adds java support'
            'java-environment:      required by extension-wiki-publisher and extension-nlpsolver'
            'pstoedit:              translates PostScript and PDF graphics into other vector formats'
            'libmythes:             for use in thesaurus'
            'beanshell:             interactive java -- good for prototyping/macros'
            'libmspack:             library for Microsoft compression formats for use in FontOOo'
            'libwpg:                library for importing and converting WordPerfect Graphics format'
            'sane:                  for scanner access'
            'unixodbc:              adds ODBC database support'
            'gst-plugins-base-libs: for multimedia content, e.g. in Impress'
            'libpaper:              takes care of papersize'
            'postgresql-libs:       for postgresql-connector'
            'coin-or-mp:	          required by the Calc solver'
            'gtk3:                  for GTK3 integration'
            'kdelibs:               for KDE desktop integration')
provides=('libreoffice' 'libreoffice-en-US')
source_x86_64=("https://dev-builds.libreoffice.org/pre-releases/rpm/x86_64/${_pkgnamefmt}_${_LOver}_Linux_x86-64_rpm.tar.gz")
sha256sums_x86_64=('cde126463c17c96b9301765958dea98c1890e3bd54fed9de2caf984c9f5e2a94')

package() {
	cd ${_pkgnamefmt}_${_LOver}*/RPMS

	for rpm in *rpm ; do
		bsdtar -x -f ${rpm} -C ${pkgdir}
	done
}
