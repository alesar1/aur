# $Id: externallibs.mk,v 1.3 2018/10/10 11:12:48 mwebster Exp $

# External Library and Include Paths

FSLEXTLIB=${FSLDIR}/extras/lib
FSLEXTINC=${FSLDIR}/extras/include
FSLEXTBIN=${FSLDIR}/extras/bin

# GD library
LIB_GD = /usr/lib
INC_GD = /usr/include

# GDC library
LIB_GDC = ${FSLEXTLIB}
INC_GDC = ${FSLEXTINC}/libgdc

# LIBXML2 library
INC_XML2 = /usr/include/libxml2

# LIBXML++ library
INC_XML++ = /usr/include/libxml++-2.6
INC_XML++CONF = /usr/lib/libxml++-2.6/include

# GSL library
LIB_GSL = /usr/lib
INC_GSL = /usr/include/gsl

# PNG library
LIB_PNG = /usr/lib
INC_PNG = /usr/include/libpng1.6

# PROB library
LIB_PROB = ${FSLEXTLIB}
INC_PROB = ${FSLEXTINC}/libprob

# CPROB library
LIB_CPROB = ${FSLEXTLIB}
INC_CPROB = ${FSLEXTINC}/libcprob

# NEWMAT library
#LIB_NEWMAT = ${FSLEXTLIB} -llapack -lblas or just -lopenblas
#LIB_NEWMAT = /usr/lib/newmat
#INC_NEWMAT = /usr/include/newmat
LIB_NEWMAT = ${FSLEXTLIB} -llapack -lblas
INC_NEWMAT = ${FSLEXTINC}/armawrap/armawrap -DARMA_USE_LAPACK -DARMA_USE_BLAS -DARMA_64BIT_WORD

# NEWRAN library
LIB_NEWRAN = ${FSLEXTLIB}
INC_NEWRAN = ${FSLEXTINC}/newran

# ZLIB library
LIB_ZLIB = /usr/lib
INC_ZLIB = /usr/include

# BOOST library
#BOOSTDIR = ${FSLEXTINC}/boost
LIB_BOOST = /usr/lib
INC_BOOST = /usr/include/boost

# QT library
#QTDIR = /usr/lib/qt5
LIB_QT = /usr/lib
INC_QT = ${QTDIR}/include/qt

# QWT library
#QWTDIR = /usr/local/qwt
LIB_QWT = /usr/lib
INC_QWT = /usr/include/qwt

# FFTW3 library
LIB_FFTW3 = /usr/lib
INC_FFTW3 = /usr/include

# VTK library
VTKDIR_INC = /usr/include/vtk
VTKDIR_LIB = /usr/lib
VTKSUFFIX =
